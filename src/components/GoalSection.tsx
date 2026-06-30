import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Card } from "@/components/ui/card"
import { Rocket } from "@phosphor-icons/react"

export function GoalSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <motion.section 
      id="goal" 
      className="py-16 px-6 bg-secondary/30"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Rocket size={32} weight="fill" className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Mein Ausbildungsziel
          </h2>
        </div>
        <Card className="p-6 md:p-8">
          <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
            <p>
              Ich suche eine duale Ausbildung im IT-Bereich, bei der analytisches Denken, technische
              Problemlösung und praktisches Lernen zusammenkommen.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-md">
              <p className="font-medium text-foreground mb-2">
                Besonders interessieren mich diese Ausbildungsberufe:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-base">
                <li>Fachinformatiker für Systemintegration</li>
                <li>Fachinformatiker für Anwendungsentwicklung</li>
                <li>Fachinformatiker für Digitale Vernetzung</li>
                <li>IT-Systemelektroniker</li>
              </ol>
            </div>
            <p>
              Mein Ziel ist es, Systeme nicht nur zu benutzen, sondern sie wirklich zu verstehen: Wie sie
              aufgebaut sind, wie Fehler entstehen und wie man stabile technische Lösungen entwickelt.
            </p>
          </div>
        </Card>
      </div>
    </motion.section>
  )
}
