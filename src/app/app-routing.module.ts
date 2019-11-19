import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrackerComponent } from './tracker/tracker.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdventureComponent } from './adventure/adventure.component';
import { CombatComponent } from './combat/combat.component';
import { FormsComponent } from './forms/forms.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'tracker', component: TrackerComponent},
  { path: 'adventure', component: AdventureComponent },
  { path: 'forms', component: FormsComponent},
  { path: 'combat', component: CombatComponent },
  { path: 'stats', component: StatsComponent },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
