import ProfilePic from "../ProfilePic/ProfilePic";

const Header = () => {
  return (
    <header className="sticky top-0 bg-gruv-bg-1 border-b-2 border-gruv-orange p-4 text-white">
      <ProfilePic size="small" />
    </header>
  );
};

export default Header;
