import { router } from "./router/router.js";
import { ROUTES } from "./config/constants.js";

import { HomePage } from "./pages/HomePage.js";
import { SpotDetailPage } from "./pages/SpotDetailPage.js";
import { AddSpotPage } from "./pages/AddSpotPage.js";
import { NotFoundPage } from "./pages/NotFoundPage.js";


router
.addRoute(ROUTES.HOME, () => HomePage())
.addRoute(ROUTES.SPOT_DETAIL, SpotDetailPage)
.addRoute(ROUTES.ADD_SPOT, AddSpotPage)
.setNotFound(NotFoundPage)

document.addEventListener('DOMContentLoaded', () => {
    router.start();
});