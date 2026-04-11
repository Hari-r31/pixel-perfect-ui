const AnnouncementBar = () => {
  return (
    <div className="w-full gradient-banner py-2.5 px-4">
      <div className="section-container flex items-center justify-center gap-4">
        <p className="text-primary-foreground text-body-sm font-medium">
          30% Discount On Every Plan!
        </p>
        <a
          href="#"
          className="text-primary-foreground border border-primary-foreground/40 rounded-full px-4 py-1 text-caption font-medium hover:bg-primary-foreground/10 transition-colors"
        >
          Claim Now
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
