import { ScavengerHunt } from '@/components/ScavengerHunt';
import { scavengerHuntConfig } from '@/data/scavenger-hunt-config';

const Index = () => {
  return (
    <ScavengerHunt config={scavengerHuntConfig} />
  );
};

export default Index;
