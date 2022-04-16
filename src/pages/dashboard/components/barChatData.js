export const options = {
  responsive: true,
  maintainAspectRatio: false,
  radius: 40,
  title: {
    display: true,
    // text: 'User Activity',
    fontSize: 18,
    align: 'start',
  },

  legend: {
    display: true,
    position: 'top',
    align: 'start',
    boxBorderRadius: 50,

    labels: {
      boxWidth: 10,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          // beginAtZero:true,
          min: 0,
          max: 1200,
          stepSize: 200,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

export const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const caregiversData = [
  '550',
  '200',
  '800',
  '300',
  '600',
  '1000',
  '480',
  '730',
  '684',
  '382',
  '723',
  '333',
];

export const doctorsAndSpecialistData = [
  '200',
  '200',
  '356',
  '957',
  '534',
  '1000',
  '992',
  '621',
  '338',
  '626',
  '444',
  '583',
];
