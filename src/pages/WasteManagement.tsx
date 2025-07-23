import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recycle, CheckCircle, AlertTriangle, TrendingUp, Leaf, Heart, Shield, Factory, Zap, Users, Database, Globe, DollarSign } from "lucide-react";

const WasteManagement = () => {
  useEffect(() => {
    document.title = "Toward a New Waste Management Model | New Systems and Structures";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover transformative waste management infrastructure that converts waste into resources, supporting national wellbeing, ecological health, and economic resilience through scalable solutions.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Toward a New Waste Management Model | New Systems and Structures');
    }
  }, []);
  return <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-primary mb-2">Toward a New Waste Management Model</h1>
        <h2 className="text-3xl font-semibold text-blue-600 mb-3">Transforming Waste Infrastructure: A Scalable Solution for National Wellbeing, Ecological Health, and Economic Resilience</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">Regenerative Infrastructure</Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">Ecological Health</Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">Economic Resilience</Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">Public Health</Badge>
        </div>
        
        
      </div>

      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <Recycle className="h-6 w-6 text-blue-600" />
            Overview and Purpose
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="leading-relaxed text-lg mb-4">
            This proposal presents a strategic vision and operational framework for addressing the United States' waste crisis through scalable, high-efficiency waste processing infrastructure. Utilizing technology such as Eden Energy's advanced systems, we explore how a $200 billion investment could fully process the nation's waste while generating profound benefits for public health, ecological regeneration, economic efficiency, and systemic resilience.
          </p>
          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg border border-primary/20">
            <p className="text-sm font-medium">
              The goal of this document is to demonstrate that comprehensive waste infrastructure is not only technologically feasible but also economically justifiable and socially imperative. By drawing on existing capabilities and clear data, we aim to catalyze national action and policy alignment around a regenerative waste strategy.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-6 w-6" />
            The Problem: The Cost of Waste Mismanagement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Factory className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Volume</p>
                  <p className="text-sm text-muted-foreground">
                    The average American generates 4.9 pounds of waste per day. With a population of approximately 350 million, the U.S. produces roughly 1 million tons of waste per day.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Health Impacts</p>
                  <p className="text-sm text-muted-foreground">
                    Landfills and incinerators emit pollutants linked to respiratory illness, cancer, neurological damage, and endocrine disruption. Communities—especially low-income ones—near waste sites face disproportionate health risks.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Ecological Degradation</p>
                  <p className="text-sm text-muted-foreground">
                    Mismanaged waste leads to soil, water, and air pollution; oceanic plastic gyres; and biodiversity loss. Methane emissions from landfills are a major contributor to climate change.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Economic Costs</p>
                  <p className="text-sm text-muted-foreground">
                    The U.S. spends tens of billions annually on collection, landfill management, and environmental remediation. These costs are compounded by lost resource value from recyclable or compostable materials.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Database className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Feedback Failures</p>
                  <p className="text-sm text-muted-foreground">
                    Our current waste systems lack feedback loops for accountability, citizen participation, and ecological metrics—further disconnecting people from the impacts of their consumption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Zap className="h-6 w-6" />
            Operational Plan: A Scalable National System
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Technology Reference: Eden Energy Waste-to-Energy System</h4>
            <p className="text-sm text-muted-foreground mb-4">
              <a href="https://edenenergy.co/genesis" className="text-primary hover:underline">
                https://edenenergy.co/genesis
              </a>
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border">
                <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">Daily processing capacity per facility:</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">5,000 tons</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border">
                <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-1">Facility cost:</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">$1 billion</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/50 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
            <h4 className="font-semibold mb-4 text-orange-900 dark:text-orange-100">National Scaling Requirement</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-orange-800 dark:text-orange-200">Total U.S. daily waste:</span>
                <span className="font-semibold text-orange-900 dark:text-orange-100">~1,000,000 tons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-orange-800 dark:text-orange-200">Number of systems needed:</span>
                <span className="font-semibold text-orange-900 dark:text-orange-100">1,000,000 / 5,000 = 200 systems</span>
              </div>
              <div className="flex justify-between border-t border-orange-200 dark:border-orange-700 pt-3">
                <span className="text-sm font-medium text-orange-800 dark:text-orange-200">Total infrastructure cost:</span>
                <span className="text-xl font-bold text-orange-900 dark:text-orange-100">200 x $1B = $200 billion</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Implementation Notes</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Geographic distribution</p>
                  <p className="text-sm text-muted-foreground">
                    Facilities can be distributed regionally to minimize transportation emissions and stimulate local economies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Modular deployment</p>
                  <p className="text-sm text-muted-foreground">
                    Phased rollout over 5–10 years with priority to high-impact zones.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Public-private partnership model</p>
                  <p className="text-sm text-muted-foreground">
                    Government financing combined with industrial partnership and utility-grade oversight.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Recycle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
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

      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-6 w-6" />
            Net Positive Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Public Health Improvement</p>
                  <p className="text-sm text-muted-foreground">
                    Drastic reduction in toxic emissions, especially in vulnerable communities
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Climate Action</p>
                  <p className="text-sm text-muted-foreground">
                    Lower methane emissions and conversion of waste into renewable energy or inert byproducts
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
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
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Ecological Regeneration</p>
                  <p className="text-sm text-muted-foreground">
                    Cleaner water systems, soil remediation, and reduced plastic leakage
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Systemic Feedback</p>
                  <p className="text-sm text-muted-foreground">
                    Real-time data on consumption and material flow informs better governance and citizen education
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
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

      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="text-primary">Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-lg mb-4">
            The transformation of waste infrastructure represents one of the most direct, actionable pathways to improving national wellbeing, regenerating ecosystems, and unlocking economic resilience. A $200 billion investment—less than one year of military spending—could catalyze this transition and signal a new era of public infrastructure designed not only to manage waste, but to restore health and harmony between people and planet.
          </p>
          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg border border-primary/20">
            <p className="text-sm font-medium">
              This proposal is intended to inspire alignment across policy makers, engineers, investors, and community leaders to prioritize this critical and attainable shift.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default WasteManagement;
