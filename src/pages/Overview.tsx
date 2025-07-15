
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Overview = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">New Systems and Structures</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Supporting Better Feedback, Effective Governance, and Improved Wellbeing
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary">Systems Design</Badge>
          <Badge variant="secondary">Regenerative</Badge>
          <Badge variant="secondary">Participatory</Badge>
          <Badge variant="secondary">Dignity-Centered</Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About This Document</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            This paper serves as a living blueprint for systems redesign—presenting a high-level overview 
            and a series of linked whitepapers that address the core sectors of society. Each proposal is 
            designed to clearly articulate the central problems and offer grounded, implementable solutions. 
            The language throughout is intentionally concise and accessible, offering a practical foundation 
            for reflection, collaboration, and action. This collection is not exhaustive, but it is coherent—meant 
            to spark dialogue, inspire experimentation, and guide systemic regeneration across scales.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Purpose Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            We are living in a pivotal evolutionary moment—one that mirrors the metamorphosis of a caterpillar 
            into a butterfly. The social, ecological, and economic systems that once sustained us are now straining 
            under the weight of outdated structures, inefficient feedback loops, and deeply inequitable resource 
            distribution.
          </p>
          <p className="leading-relaxed">
            This whitepaper is a call to conscious redesign. It offers a set of high-level, yet actionable systems 
            change proposals that aims to support a more intelligent, responsive, and life-affirming civilization. 
            By aligning our governance, infrastructure, and technological tools with the wellbeing of both people 
            and planet, we can move beyond survival-based structures into a more regenerative and participatory 
            era—one worthy of the potential humanity holds.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dignity: The Heart of Systems Regeneration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            Dignity is the quiet foundation of a thriving society—the sense that each person's life has worth, 
            that their voice matters, and that their basic needs are not contingent on performance, productivity, 
            or conformity. It is not a luxury or a philosophical abstraction; it is a baseline condition for human 
            wellbeing, healthy communities, and democratic participation.
          </p>
          <p className="leading-relaxed mb-4">
            In today's dominant systems, dignity is routinely violated. People are forced to compete for survival, 
            perform for healthcare, beg for housing, or submit to dehumanizing conditions to access the necessities 
            of life. The poor are criminalized. The sick are bankrupted. The incarcerated are forgotten. In many 
            sectors, systems are optimized for control, compliance, or extraction—not care.
          </p>
          <p className="leading-relaxed">
            This whitepaper is, at its core, a call to restore dignity at every level of our shared existence—economically, 
            ecologically, socially, and spiritually. Each proposal within it—whether guaranteed income, restorative justice, 
            regenerative infrastructure, or collective sensemaking—aims to restructure power and flow in service of dignity.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Distinguishing Endo Economics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            As the Endo Economics model gains attention, it is essential to clearly distinguish its foundations from 
            existing frameworks such as socialism and communism. While all three systems share a concern for equity 
            and social wellbeing, Endo Economics is rooted in an evolutionary and ecological logic rather than 
            ideological redistribution.
          </p>
          <p className="leading-relaxed">
            Unlike socialism or communism, which often rely on centralized planning and the homogenization of incentives, 
            Endo Economics fosters local autonomy, diversity of contribution, and multiple dimensions of value beyond labor. 
            It is not about eliminating private enterprise or standardizing outcomes—it is about creating conditions where 
            wellbeing and mutual thriving are the primary organizing principles.
          </p>
        </CardContent>
      </Card>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Systems Change Framework</CardTitle>
          <CardDescription>
            Based on Barbara Marx Hubbard's Wheel of Co-Creation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The systems change proposals outlined in this whitepaper are organized in relationship to Barbara Marx 
            Hubbard's Wheel of Co-Creation—a visionary framework that maps the twelve key sectors of society as 
            evolving expressions of our collective potential. Rather than treating these domains as isolated silos, 
            the wheel reveals them as interdependent aspects of a living societal system. Each proposal presented 
            here offers a regenerative blueprint for transforming a core sector, integrating values of feedback, 
            participation, and wellbeing.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion: Toward a Civilization Aligned with Life</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="leading-relaxed">
              We are living through a pivotal moment in human history—one that asks not merely for reform, but for 
              a profound redesign of the systems that govern how we live, create, and care. As ecological limits are 
              breached, institutions falter, and social fragmentation deepens, the call is not to patch the old, but 
              to imagine and enact the new.
            </p>
            <p className="leading-relaxed">
              This whitepaper offers a comprehensive framework for such a transformation. Each proposal is a coherent 
              system redesign, grounded in regenerative principles and responsive to today's most pressing crises—yet 
              together, they form an integrated blueprint for a civilization rooted in wellbeing, coherence, and 
              reverence for life.
            </p>
            <p className="leading-relaxed">
              The chrysalis is thinning. The imaginal cells are multiplying. Let us weave the new with vision, humility, and joy.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="text-center">The Song Beneath the Systems</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-center italic text-muted-foreground">
            <p>Beneath the noise of breakdown,<br />there is a quieter rhythm,<br />the sound of something ancient remembering itself.</p>
            <p>It hums in mycelial webs and children's laughter,<br />in the drumbeat of hearts that still believe<br />in something more beautiful than survival.</p>
            <p>We are not just solving problems.<br />We are composing new music—<br />not for machines,<br />but for living systems that dance, breathe,<br />and know how to heal when given the chance.</p>
            <p>Let us not merely redesign systems.<br />Let us remember we are systems.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
