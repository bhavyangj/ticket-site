import { MainButton } from "../../shared/components/Buttons";
import { Card } from "../../shared/components/Card";
import { SpaceY } from "../../shared/components/Utils";

const fakeProfile = {
  picture: "/fake/fake_profile_user.png",
  name: "David Lee",
  email: "xxx@gmail.com",
  phone: "1-777-777-777",
  koreanName: "이XX",
  country: "USA",
};

export const MyAccountView = () => {
  const bodyRowClass = "flex w-full justify-between px-10";
  return (
    <div className="min-h-[600px] flex flex-col items-center pt-[5vh] pb-[20vh]">
      <SpaceY />
      <span className="font-volkhov font-bold text-dark text-2xl">
        My Account
      </span>
      <SpaceY /> <SpaceY />
      <div className="w-[70vw] max-w-[900px]">
        <Card
          header={
            <div className="flex justify-between items-center w-full">
              <span className="text-blue font-medium">My Profile</span>
              <a href="" className="text-gray underline">
                Edit Profile
              </a>
            </div>
          }
        >
          <div className="flex w-full">
            <div className="flex flex-col items-center w-2/12">
              <img width="50" src={fakeProfile.picture} alt="user avatar" />
            </div>
            <div className="flex flex-col items-center w-5/12">
              <div className={bodyRowClass}>
                <span>Name:</span>
                <span>{fakeProfile.name}</span>
              </div>
              <SpaceY />
              <div className={bodyRowClass}>
                <span>Email:</span>
                <span>{fakeProfile.email}</span>
              </div>
              <SpaceY />
              <div className={bodyRowClass}>
                <span>Phone:</span>
                <span>{fakeProfile.phone}</span>
              </div>
            </div>
            <div className="flex flex-col items-center w-5/12">
              <div className={bodyRowClass}>
                <span>Korean Name:</span>
                <span>{fakeProfile.koreanName}</span>
              </div>
              <SpaceY />
              <div className={bodyRowClass}>
                <span>Country:</span>
                <span>{fakeProfile.country}</span>
              </div>
            </div>
          </div>
        </Card>
        <SpaceY />
        <SpaceY />
        <SpaceY />
        <div className="flex justify-end w-full">
          <MainButton text="Delete Account" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
