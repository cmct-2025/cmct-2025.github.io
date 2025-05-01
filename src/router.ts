import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import CommitteesView from './views/CommitteesView.vue'
import CallForPapersView from './views/CallForPapersView.vue'
import ImportantDateView from './views/ImportantDateView.vue'
import PaperSubmissionView from './views/PaperSubmissionView.vue'
import AcceptedPapersView from './views/AcceptedPapersView.vue'
import ProgramView from './views/ProgramView.vue'
import KeynoteSpeakersView from './views/KeynoteSpeakersView.vue'
import RegistrationView from './views/RegistrationView.vue'
import VenueView from './views/VenueView.vue'
import HelpDeskView from './views/HelpDeskView.vue'
import InvitedPresentations from './views/InvitedPresentations.vue'

export const routes = [
  { path: '/', component: HomeView },
  { path: '/committees', component: CommitteesView },
  { path: '/call-for-papers', component: CallForPapersView },
  { path: '/important-date-view', component: ImportantDateView },
  { path: '/paper-sumission', component: PaperSubmissionView },
  { path: '/accepted-papers', component: AcceptedPapersView },
  { path: '/program', component: ProgramView },
  { path: '/keynote-speakers', component: KeynoteSpeakersView },
  { path: '/invited-presentations', component: InvitedPresentations},
  { path: '/registration', component: RegistrationView },
  { path: '/venue', component: VenueView },
  { path: '/help-desk', component: HelpDeskView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

