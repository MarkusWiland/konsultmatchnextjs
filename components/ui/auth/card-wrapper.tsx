"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSoical?: boolean;
}
export function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSoical,
}: CardWrapperProps) {
  return (
    <Card>
        <CardHeader>
            {headerLabel}
        </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
