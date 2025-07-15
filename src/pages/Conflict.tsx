import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Conflict = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Conflict Transformation</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transforming conflict into opportunities for deeper understanding and community resilience
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Traditional conflict resolution often seeks to suppress or eliminate conflict rather 
            than transform it into opportunities for growth and deeper understanding. This paper 
            explores frameworks for conflict transformation that honor diverse perspectives, 
            address systemic issues, and strengthen community bonds.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Conflict is an inevitable part of human interaction, arising from differences in needs, values, and perspectives.
            However, conflict is often viewed negatively, as something to be avoided or suppressed.
            This paper proposes a shift in perspective, viewing conflict as an opportunity for growth, learning, and deeper understanding.
            Conflict transformation is a process that seeks to address the root causes of conflict,
            transforming destructive patterns into constructive dialogue and collaboration.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Principles of Conflict Transformation</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Embracing Complexity:</strong> Recognizing that conflict is often multifaceted and interconnected with various
              social, economic, and political factors.
            </li>
            <li>
              <strong>Honoring Diverse Perspectives:</strong> Valuing and integrating different viewpoints, experiences, and cultural
              backgrounds to gain a more comprehensive understanding of the conflict.
            </li>
            <li>
              <strong>Addressing Systemic Issues:</strong> Identifying and addressing the underlying systemic factors that contribute to
              conflict, such as inequality, discrimination, and lack of access to resources.
            </li>
            <li>
              <strong>Building Relationships:</strong> Fostering trust, empathy, and mutual respect among conflicting parties to create a
              foundation for constructive dialogue and collaboration.
            </li>
            <li>
              <strong>Promoting Empowerment:</strong> Empowering individuals and communities to take ownership of the conflict resolution
              process and develop their own solutions.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Strategies for Conflict Transformation</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Dialogue and Mediation:</strong> Facilitating structured conversations between conflicting parties to promote
              understanding, identify common ground, and develop mutually acceptable solutions.
            </li>
            <li>
              <strong>Restorative Justice:</strong> Bringing together victims, offenders, and community members to address the harm caused
              by conflict, promote healing, and restore relationships.
            </li>
            <li>
              <strong>Peacebuilding Education:</strong> Providing individuals and communities with the knowledge, skills, and attitudes
              necessary to prevent and resolve conflicts peacefully.
            </li>
            <li>
              <strong>Advocacy and Social Change:</strong> Working to address systemic issues that contribute to conflict through policy
              reform, community organizing, and social activism.
            </li>
            <li>
              <strong>Creative Arts:</strong> Utilizing artistic expression, such as storytelling, music, and visual arts, to promote
              dialogue, empathy, and understanding across cultural divides.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Examples of Conflict Transformation in Action</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Community Mediation Centers:</strong> Providing accessible and affordable mediation services to resolve disputes
              between neighbors, landlords and tenants, and small business owners.
            </li>
            <li>
              <strong>Restorative Justice Programs in Schools:</strong> Addressing student misconduct through restorative practices that
              focus on repairing harm, building relationships, and promoting accountability.
            </li>
            <li>
              <strong>Peacebuilding Initiatives in Conflict Zones:</strong> Supporting local peacebuilders in war-torn regions to
              facilitate dialogue, promote reconciliation, and build sustainable peace.
            </li>
            <li>
              <strong>Truth and Reconciliation Commissions:</strong> Investigating and documenting past human rights abuses to promote
              healing, justice, and reconciliation in post-conflict societies.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Challenges and Opportunities</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Conflict transformation is not without its challenges. It requires a willingness to engage in difficult conversations,
            address uncomfortable truths, and challenge deeply ingrained patterns of behavior.
            However, the potential benefits of conflict transformation are immense.
            By transforming conflict into opportunities for growth, learning, and deeper understanding,
            we can build more resilient, equitable, and peaceful communities.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Conflict transformation offers a powerful framework for addressing the root causes of conflict and building more
            harmonious and resilient communities.
            By embracing complexity, honoring diverse perspectives, and promoting empowerment,
            we can transform destructive patterns into constructive dialogue and collaboration.
            As we move forward, it is essential to invest in peacebuilding education, support local peacebuilders,
            and advocate for policies that promote justice, equality, and social inclusion.
            Together, we can create a world where conflict is seen not as a threat, but as an opportunity for growth,
            learning, and deeper connection.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Conflict;
