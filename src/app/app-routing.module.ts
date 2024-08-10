import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CustomerRatingsComponent} from "./customer-ratings/customer-ratings.component";

export const routes: Routes = [
  {
    path: "homepage",
    loadComponent: () => import("./homepage/homepage.component").then(m => m.HomepageComponent)
  },
  {
    path: "us",
    loadComponent: () => import("./us/us.component").then(m => m.UsComponent)
  },
  {
    path: "tools",
    loadComponent: () => import("./tools/tools.component").then(m => m.ToolsComponent)
  },
  {
    path: "projects",
    loadComponent: () => import("./projects/projects.component").then(m => m.ProjectsComponent)
  },
  {
    path: "sales",
    loadComponent: () => import("./sales/sales.component").then(m => m.SalesComponent)
  },
  {
    path: "customer_ratings",
    loadComponent: () => import("./customer-ratings/customer-ratings.component").then(m => m.CustomerRatingsComponent)
  },
  {
    path: "imprint",
    loadComponent: () => import("./imprint/imprint.component").then(m => m.ImprintComponent)
  },
  {
    path: "contact",
    loadComponent: () => import("./contact/contact.component").then(m => m.ContactComponent)
  },
  {
    path: "posts/post-sideboard",
    loadComponent: () => import("./posts/post-sideboard/post-sideboard.component").then(m => m.PostSideboardComponent)
  },
  {
    path: "",
    redirectTo: "/homepage",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/homepage"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
