import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recycle, CheckCircle, AlertTriangle, TrendingUp, Leaf, Heart, Shield } from "lucide-react";

const WasteManagement = () => {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold">Toward a New Waste Management Model</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Transforming Waste Infrastructure: A Scalable Solution for National Wellbeing, Ecological Health, and Economic Resilience
        </p>
      </div>

      <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
        <p className="text-sm text-muted-foreground mb-2">By</p>
        <p className="font-semibold">Juicy Life</p>
        <p className="text-sm text-primary">juicy@actualize.earth</p>
        <p className="text-sm text-muted-foreground mt-2">
          and Aether, an AI collaborator powered by GPT-4 by OpenAI
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            This whitepaper presents a strategic vision and operational framework for addressing the United States' 
            waste crisis through scalable, high-efficiency waste processing infrastructure. Utilizing technology such 
            as Eden Energy's advanced systems, we explore how a $200 billion investment could fully process the 
            nation's waste while generating profound benefits for public health, ecological regeneration, economic 
            efficiency, and systemic resilience.
          </p>
          <p className="leading-relaxed">
            The goal of this document is to demonstrate that comprehensive waste infrastructure is not only 
            technologically feasible but also economically justifiable and socially imperative. By drawing on 
            existing capabilities and clear data, we aim to catalyze national action and policy alignment around 
            a regenerative waste strategy.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            The Problem: The Cost of Waste Mismanagement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-destructive/5 p-4 rounded-lg">
                <h4 className="font-semibold text-destructive mb-2">Volume</h4>
                <p className="text-sm">
                  The average American generates 4.9 pounds of waste per day. With a population of approximately 
                  350 million, the U.S. produces roughly 1 million tons of waste per day.
                </p>
              </div>
              
              <div className="bg-destructive/5 p-4 rounded-lg">
                <h4 className="font-semibold text-destructive mb-2">Health Impacts</h4>
                <p className="text-sm">
                  Landfills and incinerators emit pollutants linked to respiratory illness, cancer, neurological 
                  damage, and endocrine disruption. Communities—especially low-income ones—near waste sites face 
                  disproportionate health risks.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-destructive/5 p-4 rounded-lg">
                <h4 className="font-semibold text-destructive mb-2">Ecological Degradation</h4>
                <p className="text-sm">
                  Mismanaged waste leads to soil, water, and air pollution; oceanic plastic gyres; and biodiversity 
                  loss. Methane emissions from landfills are a major contributor to climate change.
                </p>
              </div>
              
              <div className="bg-destructive/5 p-4 rounded-lg">
                <h4 className="font-semibold text-destructive mb-2">Economic Costs</h4>
                <p className="text-sm">
                  The U.S. spends tens of billions annually on collection, landfill management, and environmental 
                  remediation. These costs are compounded by lost resource value from recyclable or compostable materials.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold mb-2">Feedback Failures</h4>
            <p className="text-sm text-muted-foreground">
              Our current waste systems lack feedback loops for accountability, citizen participation, and ecological 
              metrics—further disconnecting people from the impacts of their consumption.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Recycle className="h-5 w-5 text-primary" />
            Operational Plan: A Scalable National System
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h4 className="font-semibold text-primary mb-2">Technology Reference: Eden Energy Waste-to-Energy System</h4>
            <p className="text-sm text-muted-foreground mb-4">
              <a href="https://edenenergy.co/genesis" className="text-primary hover:underline">
                https://edenenergy.co/genesis
              </a>
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-sm font-medium">Daily processing capacity per facility:</p>
                <p className="text-2xl font-bold text-primary">5,000 tons</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-sm font-medium">Facility cost:</p>
                <p className="text-2xl font-bold text-primary">$1 billion</p>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg mb-6">
            <h4 className="font-semibold mb-4">National Scaling Requirement</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Total U.S. daily waste:</span>
                <span className="font-semibold">~1,000,000 tons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Number of systems needed:</span>
                <span className="font-semibold">1,000,000 / 5,000 = 200 systems</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="text-sm font-medium">Total infrastructure cost:</span>
                <span className="text-xl font-bold text-primary">200 x $1B = $200 billion</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Implementation Notes</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Geographic distribution</p>
                  <p className="text-sm text-muted-foreground">
                    Facilities can be distributed regionally to minimize transportation emissions and stimulate local economies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Modular deployment</p>
                  <p className="text-sm text-muted-foreground">
                    Phased rollout over 5–10 years with priority to high-impact zones.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Public-private partnership model</p>
                  <p className="text-sm text-muted-foreground">
                    Government financing combined with industrial partnership and utility-grade oversight.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Integration with circular economy</p>
                  <p className="text-sm text-muted-foreground">
                    Systems should include material recovery, nutrient cycling (compost, biochar), and energy feedback into the grid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Public Health Improvement</p>
                  <p className="text-sm text-muted-foreground">
                    Drastic reduction in toxic emissions, especially in vulnerable communities
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Climate Action</p>
                  <p className="text-sm text-muted-foreground">
                    Lower methane emissions and conversion of waste into renewable energy or inert byproducts
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Economic Efficiency</p>
                  <p className="text-sm text-muted-foreground">
                    Long-term cost savings vs. landfill operations; energy and material recovery offsets
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Job Creation</p>
                  <p className="text-sm text-muted-foreground">
                    Tens of thousands of high-quality jobs in construction, operations, and maintenance
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Ecological Regeneration</p>
                  <p className="text-sm text-muted-foreground">
                    Cleaner water systems, soil remediation, and reduced plastic leakage
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Systemic Feedback</p>
                  <p className="text-sm text-muted-foreground">
                    Real-time data on consumption and material flow informs better governance and citizen education
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">National Security</p>
                  <p className="text-sm text-muted-foreground">
                    Domestic resource recovery reduces reliance on global extraction and supply chains
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            The transformation of waste infrastructure represents one of the most direct, actionable pathways to 
            improving national wellbeing, regenerating ecosystems, and unlocking economic resilience. A $200 billion 
            investment—less than one year of military spending—could catalyze this transition and signal a new era 
            of public infrastructure designed not only to manage waste, but to restore health and harmony between 
            people and planet.
          </p>
          <div className="bg-primary/5 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              This whitepaper is intended to inspire alignment across policy makers, engineers, investors, and 
              community leaders to prioritize this critical and attainable shift.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WasteManagement;
