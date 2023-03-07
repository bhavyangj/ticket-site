import { PUBLIC_URL } from "../../shared";
import { MainButton } from "../../shared/components/Buttons";
import { SpaceY } from "../../shared/components/Utils";
import { AccountCard } from "./components/AccountCard";

const fakeProfile = {
  picture: `${PUBLIC_URL}/fake/fake_profile_user.png`,
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
        <AccountCard
          col1={<img width="50" src={fakeProfile.picture} alt="user avatar" />}
          col2={
            <>
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
            </>
          }
          col3={
            <>
              <div className={bodyRowClass}>
                <span>Korean Name:</span>
                <span>{fakeProfile.koreanName}</span>
              </div>
              <SpaceY />
              <div className={bodyRowClass}>
                <span>Country:</span>
                <span>{fakeProfile.country}</span>
              </div>
            </>
          }
        />
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
