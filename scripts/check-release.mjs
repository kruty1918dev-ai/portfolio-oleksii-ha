import {createHash} from 'node:crypto';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const path=new URL('../legal/release-evidence.json',import.meta.url);
export const requiredChecks=['latestGameSourceAndSdkInventory','nativeStartupAndMergedManifest','ageConsentAndNetworkMatrix','admobMessagesVendorsAndNpa','ga4RetentionAndSharing','crashQueueAndIndependentConsent','contractsAndTransferSafeguards','mailDeletionProcedure','hostingLogsAndRetention','legalNoticeAndRegionalReview','finalPublicTextAndTranslations','familiesAudienceAndContent','ageAssuranceAndFalseAgeResponse','sequentialOnboardingAndLinks'];
export function releaseIssues(evidence) {
 const issues=[];
 if(evidence.schemaVersion!==1)issues.push('Unsupported release-evidence schema');
 if(evidence.identityAndContacts?.status!=='owner-confirmed')issues.push('Controller identity and contact confirmation missing');
 if(!/^[a-f0-9]{64}$/i.test(evidence.releaseArtifactSha256||''))issues.push('Exact audited Android artifact SHA-256 missing');
 for(const field of ['firebaseAnalyticsVersion','firebaseCrashlyticsVersion'])if(!/^\d+\.\d+(?:\.\d+)?(?:[-+].*)?$/.test(evidence[field]||''))issues.push(`${field}: installed version missing`);
 const checks=[...requiredChecks];
 if(evidence.profile?.limitedAdsEnabled||evidence.profile?.underAgeLimitedAdsEnabled)checks.push('limitedAdsProcessingAndAccount');
 if(evidence.profile?.adultPersonalizationEnabled)checks.push('adultPersonalizationAndUmp');
 for(const name of checks){const c=evidence.checks?.[name];if(c?.status!=='passed'||typeof c.evidence!=='string'||c.evidence.trim().length<12)issues.push(`${name}: dated verification evidence required`);}
 for(const flag of ['limitedAdsEnabled','underAgeLimitedAdsEnabled','adultPersonalizationEnabled'])if(typeof evidence.profile?.[flag]!=='boolean')issues.push(`${flag}: explicit active/inactive feature selection required`);
 if(evidence.profile?.underAgeLimitedAdsEnabled&&!evidence.profile?.limitedAdsEnabled)issues.push('Under-age Limited Ads requires the reviewed Limited Ads mode');
 for(const key of ['quietCamp','website','impressum'])if(!/^[a-f0-9]{64}$/i.test(evidence.documentSha256?.[key]||''))issues.push(`${key}: reviewed document SHA-256 missing`);
 if(!evidence.policyRevision)issues.push('Policy revision missing');
 if(evidence.profile?.minimumAge!==13||evidence.profile?.optionalServicesMinimumAge!==16||evidence.profile?.underAgeAdsMinimumAge!==13||evidence.profile?.personalizedAdvertising!=='approved adults only; Google UMP choice required')issues.push('Profile differs from the primary 13+ / age-specific advertising model');
 return issues;
}
export async function assertReleaseReady(){
 const evidence=JSON.parse(await readFile(path,'utf8'));const issues=releaseIssues(evidence);
 for(const [key,file] of Object.entries({quietCamp:'quiet-camp/content.json',website:'website/content.json',impressum:'impressum/content.json'})){
  const hash=createHash('sha256').update(await readFile(new URL('../legal/'+file,import.meta.url))).digest('hex');
  if(evidence.documentSha256?.[key]&&evidence.documentSha256[key]!==hash)issues.push(`${key}: text changed after review`);
 }
 if(issues.length)throw Error('RELEASE BLOCKED:\n'+issues.map(i=>' - '+i).join('\n'));return evidence;
}

if(process.argv[1]===fileURLToPath(import.meta.url)){
 try{await assertReleaseReady();console.log('Release evidence complete. Reconfirm it still matches the app and account configuration before publication.');}
 catch(error){console.error(error.message);process.exitCode=1;}
}
