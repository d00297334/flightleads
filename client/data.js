
const data = () => ({
    emailDialog: false,
    to: null,
    subject: null,
    text: null,
    menu: false,
    modal: false,
    menu2: false,
    formDialog: false,
    errorDialog: false,
    invalidTimeDialog: false,
    deleteDialog: false,
    startTimeMenu: false,
    endTimeMenu: false,
    name: '',
    date: null,
    startTime: null,
    endTime: null,
    email: '',
    phone: '',
    address: '',
    type: '',
    notes: '',
    valid: {
      name: true,
      email: true,
      phone: true
    },

    id: null,
    editingId: null,
    deletingId: null,
    showId: null,
    visible: null,
    selectedAppts: {
      '2018-07-18':[{startTime: "10:30", endTime: "11:30"}]
    },

    leads: [],

    dateItems: ['Today', 'This Week', 'This Month'],
    typeItems: ['Videography', 'Photography', 'Land/Site Survey', 'Real Estate', 'Outdoor/Extreme Sports - Event', 'Outdoor/Extreme Sports - Personal', 'Other'],
    statusItems: ['NEW', 'Flight Scheduled', 'Flight Completed', 'Flight Canceled', 'Dead Lead'],

    dateFilters: [
      {text:'None', filter:'none'},
      {text:'Today', filter:'today'},
      {text:'This Week', filter:'thisWeek'},
      {text:'This Month', filter:'thisMonth'}
    ],
    dateFilter: 'None',
    typeFilters: ['None', 'Videography', 'Photography', 'Land/Site Survey', 'Real Estate', 'Outdoor/Extreme Sports - Event', 'Outdoor/Extreme Sports - Personal', 'Other'],
    typeFilter: 'None',
    statusFilters: ['None', 'NEW', 'Flight Scheduled', 'Flight Completed', 'Flight Canceled', 'Dead Lead'],
    statusFilter: 'None',

    filteredDateLeads: [],
    filteredTypeLeads: [],
    filteredStatuLeads: [],

})


export default data
