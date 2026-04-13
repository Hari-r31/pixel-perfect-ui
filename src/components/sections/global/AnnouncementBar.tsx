const announcementText = "Free IT Consultation — Book a session with our experts today!";

const AnnouncementBar = () => {
  return (
    <div className="w-full gradient-banner py-2.5 px-4 overflow-hidden">
      <div className="relative h-6">
        <p className="absolute left-0 top-1/2 whitespace-nowrap text-body-sm font-medium text-primary-foreground animate-announcement-loop">
          {announcementText}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
