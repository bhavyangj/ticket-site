export const PUBLIC_URL = "/ticket-site";
// export const PUBLIC_URL = "";

export const staticFiles = {
  icons: {
    cart: `${PUBLIC_URL}/assets/icons/cart.svg`,
    lock: `${PUBLIC_URL}/assets/icons/lock.svg`,
    profile: `${PUBLIC_URL}/assets/icons/profile.svg`,
    sign_up: `${PUBLIC_URL}/assets/icons/sign_up.svg`,
    facebook: `${PUBLIC_URL}/assets/icons/facebook.svg`,
    instagram: `${PUBLIC_URL}/assets/icons/instagram.svg`,
    blog: `${PUBLIC_URL}/assets/icons/blog.svg`,
    google: `${PUBLIC_URL}/assets/icons/google.svg`,
    naver: `${PUBLIC_URL}/assets/icons/naver.svg`,
    messages_bubble: `${PUBLIC_URL}/assets/icons/messages_bubble.svg`,
    shopping_bag: `${PUBLIC_URL}/assets/icons/shopping_bag.svg`,
    dollar_circle: `${PUBLIC_URL}/assets/icons/dollar_circle.svg`,
    call: `${PUBLIC_URL}/assets/icons/call.svg`,
    thumbs_up: `${PUBLIC_URL}/assets/icons/thumbs_up.svg`,
    coffee: `${PUBLIC_URL}/assets/icons/coffee.svg`,
    translation: `${PUBLIC_URL}/assets/icons/translation.svg`,
    location: `${PUBLIC_URL}/assets/icons/location.svg`,
    tag: `${PUBLIC_URL}/assets/icons/tag.svg`,
    tag_white: `${PUBLIC_URL}/assets/icons/tag_white.svg`,
    decrement: `${PUBLIC_URL}/assets/icons/decrement.svg`,
    increment: `${PUBLIC_URL}/assets/icons/increment.svg`,
    green_check: `${PUBLIC_URL}/assets/icons/green_check.svg`,
    black_check: `${PUBLIC_URL}/assets/icons/black_check.svg`,
    gold_medal: `${PUBLIC_URL}/assets/icons/gold_medal.svg`,
    black_medal: `${PUBLIC_URL}/assets/icons/black_medal.svg`,
    heart: `${PUBLIC_URL}/assets/icons/heart.svg`,
    calendar: `${PUBLIC_URL}/assets/icons/calendar.svg`,
    activity_1: `${PUBLIC_URL}/assets/icons/activity_1.svg`,
    activity_2: `${PUBLIC_URL}/assets/icons/activity_2.svg`,
    activity_3: `${PUBLIC_URL}/assets/icons/activity_3.svg`,
    card_calendar: `${PUBLIC_URL}/assets/icons/card_calendar.svg`,
    card_baby: `${PUBLIC_URL}/assets/icons/card_baby.svg`,
    card_adult: `${PUBLIC_URL}/assets/icons/card_adult.svg`,
    down_arrow: `${PUBLIC_URL}/assets/icons/down_arrow.svg`,
    left_arrow: `${PUBLIC_URL}/assets/icons/left_arrow.svg`,
    right_arrow: `${PUBLIC_URL}/assets/icons/right_arrow.svg`,
    paper: `${PUBLIC_URL}/assets/icons/paper.svg`,
    shop: `${PUBLIC_URL}/assets/icons/shop.svg`,
    clock: `${PUBLIC_URL}/assets/icons/clock.svg`,
    info: `${PUBLIC_URL}/assets/icons/info.svg`,
    refund: `${PUBLIC_URL}/assets/icons/refund.svg`,
    faq: `${PUBLIC_URL}/assets/icons/faq.svg`,
    disposition: `${PUBLIC_URL}/assets/icons/disposition.svg`,
    sign_out: `${PUBLIC_URL}/assets/icons/sign_out.svg`,
    edit: `${PUBLIC_URL}/assets/icons/edit.svg`,
    menu: `${PUBLIC_URL}/assets/icons/menu.svg`,
    open_eye: `${PUBLIC_URL}/assets/icons/open_eye.svg`,
    closed_eye: `${PUBLIC_URL}/assets/icons/closed_eye.svg`,
    remove: `${PUBLIC_URL}/assets/icons/remove.svg`,
  },
  images: {
    logo: `${PUBLIC_URL}/assets/icons/logo.svg`,
    cover_bg: `${PUBLIC_URL}/images/cover_background.png`,
    contact_location: `${PUBLIC_URL}/images/contact_location.png`,
    cover_bg_complete: `${PUBLIC_URL}/images/cover_background_complete.png`,
    cover_show: `${PUBLIC_URL}/images/cover_show.png`,
    product_detail_traveler: `${PUBLIC_URL}/images/product_detail_traveler.png`,
  },
};

export const API = "https://testing.thernloven.com/tickets-api-new/public/api";

export const fetcher =
  <T, U>(endpoint: string, map?: (data: T) => U) =>
  async () => {
    const res = await fetch(`${API}${endpoint}`);
    const data = await res.json();

    return map ? map(data) : data;
  };
