import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WasteManagement = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Waste Management</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Circular systems for zero waste communities and regenerative resource cycles
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Current waste management systems operate on linear models of take-make-dispose, 
            creating massive environmental burdens and resource inefficiencies. This paper 
            outlines comprehensive strategies for implementing circular waste systems that 
            eliminate waste through design, maximize resource recovery, and create regenerative 
            cycles that benefit both communities and ecosystems.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Waste is not an inevitable byproduct of human activity but rather a design flaw. 
            Traditional waste management systems focus on disposal rather than prevention, 
            leading to environmental pollution, resource depletion, and public health risks. 
            This paper presents a comprehensive vision for circular waste systems that eliminate 
            waste at its source, maximize resource recovery, and create regenerative cycles 
            that benefit both communities and ecosystems.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Strategies for Circular Waste Systems</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ol>
            <li>
              <strong>Waste Prevention through Design:</strong> Redesigning products and packaging 
              to minimize waste generation, using durable and reusable materials, and implementing 
              extended producer responsibility (EPR) schemes.
            </li>
            <li>
              <strong>Source Separation and Collection:</strong> Implementing comprehensive 
              source separation programs that enable households and businesses to separate 
              recyclable, compostable, and reusable materials from general waste streams.
            </li>
            <li>
              <strong>Composting and Anaerobic Digestion:</strong> Processing organic waste 
              through composting and anaerobic digestion to create valuable soil amendments 
              and renewable energy.
            </li>
            <li>
              <strong>Recycling and Resource Recovery:</strong> Maximizing the recovery of 
              valuable materials from waste streams through advanced recycling technologies 
              and infrastructure.
            </li>
            <li>
              <strong>Waste-to-Energy Technologies:</strong> Utilizing waste-to-energy technologies 
              to convert non-recyclable waste into renewable energy while minimizing environmental 
              impacts.
            </li>
            <li>
              <strong>Landfill Remediation and Mining:</strong> Remediating existing landfills 
              to prevent environmental contamination and mining landfills for valuable resources.
            </li>
            <li>
              <strong>Community Engagement and Education:</strong> Engaging communities in 
              waste reduction and recycling efforts through education, outreach, and incentives.
            </li>
            <li>
              <strong>Policy and Regulatory Frameworks:</strong> Implementing policies and 
              regulations that support circular waste systems, such as landfill bans, recycling 
              targets, and EPR schemes.
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Benefits of Circular Waste Systems</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <ul>
            <li>
              <strong>Environmental Protection:</strong> Reducing pollution, conserving resources, 
              and mitigating climate change.
            </li>
            <li>
              <strong>Economic Development:</strong> Creating green jobs, stimulating innovation, 
              and reducing waste management costs.
            </li>
            <li>
              <strong>Public Health:</strong> Reducing exposure to harmful pollutants and improving 
              community health outcomes.
            </li>
            <li>
              <strong>Community Resilience:</strong> Building local capacity for resource management 
              and creating more sustainable and resilient communities.
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
            Circular waste systems represent a fundamental shift in how we manage resources and 
            interact with the environment. By implementing the strategies outlined in this paper, 
            communities can eliminate waste, create regenerative cycles, and build more sustainable 
            and resilient futures.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WasteManagement;
