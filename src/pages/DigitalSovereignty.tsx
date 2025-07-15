
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const DigitalSovereignty = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Shield className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Digital Sovereignty</h1>
          <p className="text-xl text-muted-foreground">Decentralized Infrastructure & Self-Owned Identity</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">Self-Sovereignty</Badge>
        <Badge variant="secondary">Decentralized</Badge>
        <Badge variant="secondary">Privacy</Badge>
        <Badge variant="secondary">Verifiable Credentials</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Foundational Shift in Digital Identity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            The digital sovereignty and decentralized infrastructure proposal outlines a foundational shift in how 
            identity, trust, and participation function in the digital age. At a time when centralized platforms 
            dominate access and control, this approach empowers individuals with self-owned digital identities that 
            are portable, verifiable, and privacy-preserving.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DigitalSovereignty;
