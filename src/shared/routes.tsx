import { createHashRouter, Outlet } from "react-router-dom";
import { LogInView } from "../modules/authentication/LogInView";
import { PageLayout, CoverTypes } from "../modules/page_layout/PageLayout";
import { SignUpView } from "../modules/authentication/SignUpView";
import { LandingView } from "../modules/landing/LandingView";
import { MainView } from "../modules/main/MainView";
import { NotFound } from "./components/NotFound";
import { ForgotPasswordView } from "../modules/authentication/ForgotPasswordView";
import { CreatePasswordView } from "../modules/authentication/CreatePasswordView";
import { RegisterView } from "../modules/authentication/RegisterView";
import { MyAccountView } from "../modules/authentication/MyAccountView";
import { EditAccountView } from "../modules/authentication/EditAccountView";
import { SuccessActionView } from "../modules/authentication/SuccessActionView";
import { DeleteAccountView } from "../modules/authentication/DeleteAccountView";
import { ContactView } from "../modules/contact/ContactView";
import { AboutView } from "../modules/about/AboutView";
import { ProductsLayout } from "../modules/page_layout/ProductsLayout";
import { BigApplePassView } from "../modules/package_tour/BigApplePassView";
import { NYExploreView } from "../modules/package_tour/NYExploreView";
import { NYCityPassView } from "../modules/package_tour/NYCityPassView";
import { ObservationsView } from "../modules/city_attractions/ObservationsView";
import { RidesAndCruisesView } from "../modules/city_attractions/RidesAndCruisesView";
import { MusicalsAndShowsView } from "../modules/musicals_and_shows/MusicalsAndShowsView";
import { ProductDetailView } from "../modules/product_detail/ProductDetailView";
import { ShowDetailView } from "../modules/product_detail/ShowDetailView";
import { ProductDetailLayout } from "../modules/page_layout/ProductDetailLayout";
import { CartView } from "../modules/cart/CartView";
import { NoAuthCheckoutView } from "../modules/cart/NoAuthCheckoutView";
import { BookingsLayout } from "../modules/page_layout/BookingsLayout";
import { BookingsView } from "../modules/bookings/BookingsView";
import { MuseumAndGallery } from "../modules/city_attractions/MuseumAndGalleryView";
import { Activities } from "../modules/city_attractions/ActivitiesView";
import { ManhattanDayTourView } from "../modules/guide_tour/ManhattanDayTourView";
import { ManhattanNightTourView } from "../modules/guide_tour/ManhattanNightTourView";
import { DosonTourView } from "../modules/guide_tour/DosonTourView";
import { UNTourView } from "../modules/guide_tour/UNTourView";

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <PageLayout cover={CoverTypes.INFO}>
        <LandingView />
      </PageLayout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/main",
    element: (
      <PageLayout cover={CoverTypes.INFO}>
        <MainView />
      </PageLayout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/user",
    element: (
      <PageLayout cover={CoverTypes.NORMAL}>
        <Outlet />
      </PageLayout>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "sign-up",
        element: <SignUpView />,
      },
      {
        path: "log-in",
        element: <LogInView />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordView />,
      },
      {
        path: "create-password",
        element: <CreatePasswordView />,
      },
      {
        path: "register",
        element: <RegisterView />,
      },
      {
        path: "my-account",
        element: <MyAccountView />,
      },
      {
        path: "edit-account",
        element: <EditAccountView />,
      },
      {
        path: "update-success",
        element: (
          <SuccessActionView msg="Your account has been updated successfully." />
        ),
      },
      {
        path: "delete-success",
        element: (
          <SuccessActionView msg="Your account has been deleted successfully. " />
        ),
      },
      {
        path: "delete-user",
        element: <DeleteAccountView />,
      },
    ],
  },
  {
    path: "/contact",
    element: (
      <PageLayout cover={CoverTypes.NORMAL}>
        <ContactView />
      </PageLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <PageLayout cover={CoverTypes.NORMAL}>
        <AboutView />
      </PageLayout>
    ),
  },
  {
    path: "/package-tour",
    element: (
      <PageLayout cover={CoverTypes.NORMAL}>
        <Outlet />
      </PageLayout>
    ),
    children: [
      {
        path: "ny-ba-pass",
        element: (
          <ProductsLayout
            sectionDescription="뉴욕 빅애플패스(New York Big Apple Pass)는 뉴욕을 방문하는 여행객들과 로컬들이 즐겨 찾는 관광명소 TOP 37을 자유롭게 선택하여 최대 64%까지 할인받을 수 있는 뉴욕 여행의 필수템이에요! 여행 경비를 절반으로 값싸게. 명소마다 일일이 티켓을 구매하는 번거로움이 한방에 해결하고 더 많은 뉴욕의 구석구석을 방문하며 스마트한 뉴욕 여행을 즐겨보세요."
            sectionTitle="Big Apple Pass"
          >
            <BigApplePassView />
          </ProductsLayout>
        ),
      },
      {
        path: "ny-city-pass",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here"
            sectionTitle="NY City Pass"
          >
            <NYCityPassView />
          </ProductsLayout>
        ),
      },
      {
        path: "ny-explore-pass",
        element: (
          <ProductsLayout
            sectionDescription="The NEW YORK CityPass is a pass that combines admission tickets to 5 New York attractions."
            sectionTitle="NY Explore"
          >
            <NYExploreView />
          </ProductsLayout>
        ),
      },
    ],
  },
  {
    path: "/city-attractions",
    element: (
      <PageLayout cover={CoverTypes.NORMAL}>
        <Outlet />
      </PageLayout>
    ),
    children: [
      {
        path: "observations",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="Scenics"
          >
            <ObservationsView />
          </ProductsLayout>
        ),
      },
      {
        path: "museum-gallery",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="Scenics"
          >
            <MuseumAndGallery />
          </ProductsLayout>
        ),
      },
      {
        path: "rides-cruises",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="Rides/Cruises"
          >
            <RidesAndCruisesView />
          </ProductsLayout>
        ),
      },
      {
        path: "activities",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="Scenics"
          >
            <Activities />
          </ProductsLayout>
        ),
      },
    ],
  },
  {
    path: "/guide-tour",
    element: (
      <PageLayout cover={CoverTypes.NORMAL}>
        <Outlet />
      </PageLayout>
    ),
    children: [
      {
        path: "manhattan-day",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="Manhattan day"
          >
            <ManhattanDayTourView />
          </ProductsLayout>
        ),
      },
      {
        path: "manhattan-night",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="Manhattan night"
          >
            <ManhattanNightTourView />
          </ProductsLayout>
        ),
      },
      {
        path: "doson-tour",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="Doson Tour"
          >
            <DosonTourView />
          </ProductsLayout>
        ),
      },

      {
        path: "un-tour",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="UN Tour"
          >
            <UNTourView />
          </ProductsLayout>
        ),
      },
    ],
  },
  {
    path: "/musicals-and-shows",
    element: (
      <PageLayout cover={CoverTypes.SHOWS}>
        <ProductsLayout
          sectionDescription="뉴욕 빅애플패스(New York Big Apple Pass)는 뉴욕을 방문하는 여행객들과 로컬들이 즐겨 찾는 관광명소 TOP 37을 자유롭게 선택하여 최대 64%까지 할인받을 수 있는 뉴욕 여행의 필수템이에요! 여행 경비를 절반으로 값싸게. 명소마다 일일이 티켓을 구매하는 번거로움이 한방에 해결하고 더 많은 뉴욕의 구석구석을 방문하며 스마트한 뉴욕 여행을 즐겨보세요."
          sectionTitle="Broadway Musicals / Shows"
        >
          <MusicalsAndShowsView />
        </ProductsLayout>
      </PageLayout>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <PageLayout cover={CoverTypes.NONE}>
        <ProductDetailLayout>
          <ProductDetailView />
        </ProductDetailLayout>
      </PageLayout>
    ),
  },
  {
    path: "/show-detail/:id",
    element: (
      <PageLayout cover={CoverTypes.NONE}>
        <ProductDetailLayout>
          <ShowDetailView />
        </ProductDetailLayout>
      </PageLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <PageLayout cover={CoverTypes.NORMAL_WITHOUT_TEXT}>
        <CartView />
      </PageLayout>
    ),
  },
  {
    path: "/no-auth-checkout",
    element: (
      <PageLayout cover={CoverTypes.NONE}>
        <NoAuthCheckoutView />
      </PageLayout>
    ),
  },
  {
    path: "/my-bookings",
    element: (
      <PageLayout
        cover={CoverTypes.NORMAL_WITHOUT_TEXT}
        backgroundColor="bg-[#f2f2f2]"
      >
        <BookingsLayout>
          <BookingsView />
        </BookingsLayout>
      </PageLayout>
    ),
  },
]);
