import assert from 'node:assert/strict';
import {releaseIssues,requiredChecks} from './check-release.mjs';
const evidence={schemaVersion:1,policyRevision:'test',identityAndContacts:{status:'owner-confirmed'},releaseArtifactSha256:'a'.repeat(64),firebaseAnalyticsVersion:'1.2.3',firebaseCrashlyticsVersion:'1.2.3',documentSha256:{quietCamp:'b'.repeat(64),website:'c'.repeat(64),impressum:'d'.repeat(64)},profile:{minimumAge:13,optionalServicesMinimumAge:16,underAgeAdsMinimumAge:13,limitedAdsEnabled:false,underAgeLimitedAdsEnabled:false,adultPersonalizationEnabled:false,personalizedAdvertising:'approved adults only; Google UMP choice required'},checks:Object.fromEntries(requiredChecks.map(k=>[k,{status:'passed',evidence:'Synthetic test fixture, not release verification'}]))};
assert.deepEqual(releaseIssues(evidence),[]);
for(const key of requiredChecks){const altered=structuredClone(evidence);delete altered.checks[key];assert(releaseIssues(altered).some(s=>s.startsWith(key)));}
const noSdk=structuredClone(evidence);noSdk.firebaseCrashlyticsVersion=null;assert(releaseIssues(noSdk).some(s=>s.startsWith('firebaseCrashlyticsVersion')));
const wrongModel=structuredClone(evidence);wrongModel.profile.personalizedAdvertising=true;assert(releaseIssues(wrongModel).length);
const ltd=structuredClone(evidence);ltd.profile.limitedAdsEnabled=true;assert(releaseIssues(ltd).some(s=>s.startsWith('limitedAdsProcessingAndAccount')));
ltd.checks.limitedAdsProcessingAndAccount={status:'passed',evidence:'Synthetic LTD proof only'};assert.deepEqual(releaseIssues(ltd),[]);
const child=structuredClone(evidence);child.profile.underAgeLimitedAdsEnabled=true;assert(releaseIssues(child).some(s=>s.startsWith('Under-age Limited')));
const personalized=structuredClone(evidence);personalized.profile.adultPersonalizationEnabled=true;assert(releaseIssues(personalized).some(s=>s.startsWith('adultPersonalizationAndUmp')));
assert(releaseIssues({}).length>requiredChecks.length);
console.log('PASS: release checks reject missing evidence, unknown SDKs, missing document reviews and a changed privacy model. Synthetic fixtures only.');
