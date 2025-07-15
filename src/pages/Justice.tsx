import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Justice = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Justice</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Restorative justice systems that heal communities and address root causes of harm
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Punitive justice systems perpetuate cycles of harm while failing to address root 
            causes or heal communities. This paper explores restorative justice frameworks 
            that focus on healing, accountability, and systemic transformation to create 
            truly just and regenerative communities.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            The current justice system in many societies is primarily punitive, focusing on punishment rather than rehabilitation or addressing the root causes of crime. This approach often leads to high rates of recidivism, disproportionately affects marginalized communities, and fails to provide healing for victims and offenders alike. Restorative justice offers an alternative framework that prioritizes repairing harm, fostering accountability, and promoting reconciliation.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Principles of Restorative Justice</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li><strong>Focus on Harm:</strong> Restorative justice begins by identifying the harm caused by an offense and understanding the needs of those affected.</li>
            <li><strong>Involvement of Stakeholders:</strong> It emphasizes the active participation of victims, offenders, and community members in the justice process.</li>
            <li><strong>Accountability:</strong> Offenders are encouraged to take responsibility for their actions and make amends for the harm they have caused.</li>
            <li><strong>Repairing Harm:</strong> The goal is to repair the harm to the extent possible through restitution, community service, or other restorative measures.</li>
            <li><strong>Reintegration:</strong> Restorative justice seeks to reintegrate offenders back into the community as productive and law-abiding members.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Restorative Justice Practices</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li><strong>Victim-Offender Mediation:</strong> A facilitated dialogue between the victim and offender to discuss the harm caused and explore ways to repair it.</li>
            <li><strong>Community Conferencing:</strong> A meeting involving victims, offenders, their families, and community members to address the harm and develop a plan for repair.</li>
            <li><strong>Sentencing Circles:</strong> A collaborative process in which community members participate in determining appropriate sentences for offenders.</li>
            <li><strong>Restitution:</strong> Offenders provide compensation to victims for their losses or damages.</li>
            <li><strong>Community Service:</strong> Offenders perform unpaid work to benefit the community and repair the harm they have caused.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Benefits of Restorative Justice</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li><strong>Increased Victim Satisfaction:</strong> Victims often report higher levels of satisfaction with restorative justice processes compared to traditional court proceedings.</li>
            <li><strong>Reduced Recidivism:</strong> Studies have shown that restorative justice can be more effective than traditional punishment in reducing reoffending rates.</li>
            <li><strong>Cost Savings:</strong> Restorative justice programs can be less expensive than incarceration and other forms of punishment.</li>
            <li><strong>Community Healing:</strong> Restorative justice promotes healing and reconciliation within communities affected by crime.</li>
            <li><strong>Empowerment:</strong> It empowers victims and offenders to actively participate in the justice process and shape the outcome.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Challenges and Considerations</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li><strong>Implementation Challenges:</strong> Implementing restorative justice requires a shift in mindset and resources from traditional punitive approaches.</li>
            <li><strong>Suitability:</strong> Restorative justice may not be appropriate for all types of offenses or offenders, particularly in cases involving serious violence or unrepentant offenders.</li>
            <li><strong>Power Imbalances:</strong> It is important to address power imbalances between victims and offenders to ensure that restorative justice processes are fair and equitable.</li>
            <li><strong>Cultural Sensitivity:</strong> Restorative justice practices should be culturally sensitive and adapted to the specific needs and values of diverse communities.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Restorative justice offers a promising alternative to traditional punitive approaches, with the potential to reduce recidivism, increase victim satisfaction, and promote community healing. By focusing on repairing harm, fostering accountability, and empowering stakeholders, restorative justice can create more just and regenerative communities.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Justice;
