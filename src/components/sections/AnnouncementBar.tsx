import { ArrowRight } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-primary to-teknify-purple py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
        <p className="text-primary-foreground text-sm font-medium">
          🎉 30% Discount On Every Plan!
        </p>
        <button className="text-primary-foreground border border-primary-foreground/40 rounded-full px-4 py-1 text-xs font-medium hover:bg-primary-foreground/10 transition-colors flex items-center gap-1.5">
          Claim Now <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
