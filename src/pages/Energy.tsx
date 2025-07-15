import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Energy = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Energy Infrastructure</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Decentralized renewable energy systems for community resilience and sovereignty
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Centralized energy systems create vulnerabilities and dependencies that undermine 
            community resilience. This paper explores the implementation of decentralized, 
            renewable energy infrastructure that empowers communities with energy sovereignty 
            while supporting ecological regeneration and economic localization.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Energy is the lifeblood of modern society, powering our homes, industries, and transportation systems. However, the current centralized energy infrastructure is unsustainable, relying heavily on fossil fuels that contribute to climate change and environmental degradation. Moreover, centralized systems create vulnerabilities and dependencies that undermine community resilience.
          </p>
          <p>
            This paper explores the implementation of decentralized, renewable energy infrastructure that empowers communities with energy sovereignty while supporting ecological regeneration and economic localization. We will examine the benefits of decentralized energy systems, the technologies and strategies for implementation, and the policies and incentives needed to accelerate the transition to a regenerative energy future.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Benefits of Decentralized Energy Systems</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Increased Resilience:</strong> Decentralized energy systems are more resilient to disruptions, such as natural disasters or cyberattacks, as they are not dependent on a single point of failure.
            </li>
            <li>
              <strong>Reduced Environmental Impact:</strong> Renewable energy sources, such as solar, wind, and geothermal, produce little to no greenhouse gas emissions, reducing the environmental impact of energy production.
            </li>
            <li>
              <strong>Economic Localization:</strong> Decentralized energy systems can create local jobs and economic opportunities, as well as reduce the need for expensive transmission infrastructure.
            </li>
            <li>
              <strong>Community Empowerment:</strong> Decentralized energy systems empower communities to take control of their energy future, promoting energy sovereignty and self-determination.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Technologies and Strategies for Implementation</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Solar Power:</strong> Solar photovoltaic (PV) systems can be installed on rooftops, in fields, or integrated into building materials to generate electricity from sunlight.
            </li>
            <li>
              <strong>Wind Power:</strong> Wind turbines can be installed in windy areas to generate electricity from the kinetic energy of the wind.
            </li>
            <li>
              <strong>Geothermal Energy:</strong> Geothermal energy can be harnessed from underground reservoirs of hot water or steam to generate electricity or provide direct heating.
            </li>
            <li>
              <strong>Energy Storage:</strong> Energy storage systems, such as batteries or pumped hydro, can store excess energy generated from renewable sources for later use.
            </li>
            <li>
              <strong>Microgrids:</strong> Microgrids are localized energy grids that can operate independently or in conjunction with the main grid, providing increased resilience and energy security.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Policies and Incentives</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Feed-in Tariffs:</strong> Feed-in tariffs provide guaranteed payments to renewable energy producers for the electricity they generate.
            </li>
            <li>
              <strong>Net Metering:</strong> Net metering allows renewable energy producers to receive credit for excess electricity they send back to the grid.
            </li>
            <li>
              <strong>Tax Credits and Rebates:</strong> Tax credits and rebates can reduce the upfront cost of renewable energy systems, making them more affordable for homeowners and businesses.
            </li>
            <li>
              <strong>Renewable Portfolio Standards:</strong> Renewable portfolio standards require utilities to generate a certain percentage of their electricity from renewable sources.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Decentralized, renewable energy infrastructure offers a pathway to a more resilient, sustainable, and equitable energy future. By empowering communities with energy sovereignty, reducing environmental impact, and creating local economic opportunities, decentralized energy systems can help build a regenerative society that benefits both people and the planet.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Energy;
