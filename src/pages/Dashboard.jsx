import { useEffect } from 'react'
import { Avatar, Card } from "flowbite-react"
import ReactApexChart from 'react-apexcharts'
import {
  HiOutlineOfficeBuilding,
  HiOutlineIdentification,
  HiOutlineMail,
  HiOutlinePhone
} from "react-icons/hi"
import {
  HiOutlineDocument,
  HiOutlineShoppingBag,
} from "react-icons/hi"
import { HiOutlineBanknotes } from "react-icons/hi2"

import AvatarImg from '../assets/avatar.png'
import Header from '../components/Header'

const ApprovedLoanChart = () => {
  const chartData = {
    series: [40],
    options: {
      chart: {
        height: 180,
        type: 'radialBar',
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        dataLabels: {
          labels: {
            show: true
          },
          name: {
            show: false
          },
          value: {
            show: true
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              const sum = w.globals.seriesTotals.reduce((a, b) => {
                return a + b
              }, 0)
              return `${sum}%`
            },
          }
        },
      },
    },
    labels: ['Approved'],
    dataLabels: {
      show: true
    }
  }

  return (
    <ReactApexChart
      options={chartData}
      series={chartData.series}
      type={chartData.options.chart.type}
    />
  )
}

const TargetChart = () => {
  const chartData = {
    series: [240],
    options: {
      chart: {
        height: 180,
        type: 'radialBar',
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        dataLabels: {
          labels: {
            show: true
          },
          name: {
            show: false
          },
          value: {
            show: true
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              const sum = w.globals.seriesTotals.reduce((a, b) => {
                return a + b
              }, 0)
              return `${sum}%`
            },
          }
        },
      },
    },
    labels: ['Approved'],
    dataLabels: {
      show: true
    }
  }

  return (
    <ReactApexChart
      options={chartData}
      series={chartData.series}
      type={chartData.options.chart.type}
    />
  )
}

const DonutChart = () => {
  const chartData = {
    series: [30, 25, 20, 15, 10],
    options: {
      labels: ['BRI', 'Artha Graha', 'BTN', 'Mandiri', 'KEB Hana Bank'],
      chart: {
        width: 200,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true
              }
            },
          }
        }
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: false
      }
    },
  }

  return (
    <>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type={chartData.options.chart.type}
        width={360}
      />
    </>
  )
}

const cardTheme = {
  root: {
    children: "flex flex-col lg:flex-row gap-4 p-6 items-center justify-center text-center"
  }
}



function Dashboard() {

  useEffect(() => {
    // fix rendering issue on deployment 
    window.dispatchEvent(new Event('resize'))
  })

  return (
    <>
      {/* Top Header */}
      <Header pageTitle="Dashboard" />

      {/* Body Header */}
      <Card className='rounded-none border-0 py-4 pl-4 sm:pl-8 pr-4 sm:ml-60 '>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Avatar className="w-36 h-36" img={AvatarImg} rounded size="none" alt='avatar' />
          <section>
            <p className='uppercase text-4xl text-blues-500 mb-3'>Yohannes Affandi (jojo)</p>
            <div className='flex gap-4'>
              <div>
                <p className='flex gap-2 items-center'><HiOutlineOfficeBuilding /> Loan Market Office Dev</p>
                <p className='flex gap-2 items-center'><HiOutlineIdentification /> LM9990001</p>
              </div>
              <div>
                <p className='flex gap-2 items-center'><HiOutlineMail /> it@loanmarket.co.id</p>
                <p className='flex gap-2 items-center'><HiOutlinePhone /> +6281234567890</p>
              </div>
            </div>
          </section>
        </div>
      </Card>

      {/* Body */}
      <div className="px-4 sm:ml-60 bg-gray-200">

        {/*  Marker Dashed Line - (use red-200) */}
        <div className="p-4 grid grid-cols-4 xl:grid-cols-6 grid-rows-auto gap-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

          {/* 4 Cards */}
          <Card theme={cardTheme} className="col-span-2 lg:col-span-1 flex justify-center shadow-md">
            <div className="flex items-center justify-center rounded-full bg-blues-100 stroke-blues-700">
              <HiOutlineIdentification className="m-3 h-9 w-9 lg:h-6 lg:w-6 stroke-blues-700" />
            </div>
            <div className="uppercase">
              <p className='text-xl uppercase font-semibold'>contact</p>
              <p className='text-2xl font-semibold text-blues-500'>51</p>
            </div>
          </Card>
          <Card theme={cardTheme} className="col-span-2 lg:col-span-1 flex justify-center shadow-md">
            <div className="flex items-center justify-center rounded-full bg-blues-100 stroke-blues-700">
              <HiOutlineDocument className="m-3 h-9 w-9 lg:h-6 lg:w-6 stroke-blues-700" />
            </div>
            <div className="uppercase">
              <p className='text-xl uppercase font-semibold'>loan</p>
              <p className='text-2xl font-semibold text-blues-500'>56</p>
            </div>
          </Card>
          <Card theme={cardTheme} className="col-span-2 lg:col-span-1 flex justify-center shadow-md">
            <div className="flex items-center justify-center rounded-full bg-blues-100 stroke-blues-700">
              <HiOutlineShoppingBag className="m-3 h-9 w-9 lg:h-6 lg:w-6 stroke-blues-700" />
            </div>
            <div className="uppercase">
              <p className='text-xl uppercase font-semibold'>product</p>
              <p className='text-2xl font-semibold text-blues-500'>80</p>
            </div>
          </Card>
          <Card theme={cardTheme} className="col-span-2 lg:col-span-1 flex justify-center shadow-md">
            <div className="flex items-center justify-center rounded-full bg-blues-100 stroke-blues-700">
              <HiOutlineBanknotes className="m-3 h-9 w-9 lg:h-6 lg:w-6 stroke-blues-700" />
            </div>
            <div className="uppercase">
              <p className='text-xl uppercase font-semibold'>bank</p>
              <p className='text-2xl font-semibold text-blues-500'>60</p>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="col-span-4 lg:col-span-2 row-span-1 lg:row-span-3 flex items-center justify-center rounded bg-white dark:bg-gray-800 shadow-md">
            <div className="text-xl text-gray-400 dark:text-gray-500">
              <p className='text-2xl uppercase pt-8 pl-8 font-semibold text-black'>Notifications</p>

              <ol className="p-6 pt-2">
                <li className="relative pl-8 sm:pl-32 py-2 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2 hrs</time>
                    <div className="text-sm font-bold text-slate-900">admin_branch has updated</div>
                  </div>
                  <div className="xs:text-xs md:text-sm">Harry Handoko - Contact|MYCRM</div>
                </li>
                <li className="relative pl-8 sm:pl-32 py-2 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-gray-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2 hrs</time>
                    <div className="text-sm font-bold text-slate-900">admin_branch has updated</div>
                  </div>
                  <div className="xs:text-xs md:text-sm">Harry Handoko - Contact|MYCRM</div>
                </li>
                <li className="relative pl-8 sm:pl-32 py-2 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">4 hrs</time>
                    <div className="text-sm font-bold text-slate-900">admin_branch has updated</div>
                  </div>
                  <div className="xs:text-xs md:text-sm">Harry Handoko - Contact|MYCRM</div>
                </li>
                <li className="relative pl-8 sm:pl-32 py-2 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-gray-800 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">4 hrs</time>
                    <div className="text-sm font-bold text-slate-900">admin_branch has updated</div>
                  </div>
                  <div className="xs:text-xs md:text-sm">Harry Handoko - Contact|MYCRM</div>
                </li>
              </ol>

            </div>
          </Card>

          {/* 2 circle chart */}
          <div className="divide-y-2 lg:divide-y-0 lg:divide-x-2 p-4 col-span-4 row-span-1 lg:row-span-2 text-center flex flex-col lg:flex-row items-center justify-center bg-white shadow-md">

            <div className="w-full p-4 flex flex-col items-center justify-center">
              <h2 className='text-2xl uppercase font-semibold text-black'>Pinjaman disetujui</h2>
              {/* <!-- Radial Chart --> */}
              <ApprovedLoanChart />
              <p className='text-sm font-semibold text-black'>2/5 Pinjaman telah disetujui</p>
            </div>

            <div className="w-full p-4 flex flex-col items-center justify-center">
              <h2 className='text-2xl uppercase font-semibold text-black'>target</h2>
              {/* <!-- Radial Chart --> */}
              <TargetChart />
              <p className='text-sm font-semibold text-black'>Rp. 14.000.000.000,00 / Rp. 5.000.000.000</p>
            </div>
          </div>

          <Card className="xs:divide-y-2 lg:divide-y-0 lg:divide-x-2 p-4 col-span-4 row-span-2 text-center flex xs:flex-col lg:flex-row items-center justify-center bg-white shadow-md">
            <div className="w-full p-4 flex flex-col items-center justify-center">
              <h2 className='text-2xl mb-4 font-semibold text-black'>Top 5 Bank Approval Tertinggi</h2>
              {/* <!-- Donut Chart --> */}
              <DonutChart />
            </div>
          </Card>

        </div>
      </div >
    </>
  )
}




export default Dashboard