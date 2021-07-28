import { Component, ViewChild, AfterViewChecked, Input } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs'

@Component({
  selector: 'app-attendance-by-governorate',
  templateUrl: './attendance-by-governorate.component.html',
  styleUrls: ['./attendance-by-governorate.component.scss']
})
export class AttendanceByGovernorateComponent implements AfterViewChecked {

  @Input() dashboard: any;
  @ViewChild(ChartComponent) chart: ChartComponent
  @ViewChild('tooltip') tooltip
  @ViewChild('legend') legend
  chartData = {
    "labels": ["Erbil", "Sulaimani", "Duhok"],
    "datasets": [
      {
        "data": [0, 0, 0],
        "backgroundColor": ["#46be8a", "#fb434a", "#1b55e3"],
        "borderColor": "#fff",
        "borderWidth": 2,
        "hoverBorderWidth": 0,
        "borderAlign": "inner"
      }
    ]
  }
  
  options = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 70,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
      custom: tooltipData => {
        const tooltipEl = this.tooltip.nativeElement
        tooltipEl.style.opacity = 1
        if (tooltipData.opacity === 0) {
          tooltipEl.style.opacity = 0
        }
      },
      callbacks: {
        label: (tooltipItem, itemData) => {
          const dataset = itemData.datasets[0]
          const value = dataset.data[tooltipItem.index]
          this.tooltip.nativeElement.innerHTML = value
        },
      },
    },
    legendCallback: chart => {
      const { labels } = chart.data
      const legendMarkup = []
      const dataset = chart.data.datasets[0]
      legendMarkup.push('<div class="flex-shrink-0">')
      let legends = labels.map((label, index) => {
        const color = dataset.backgroundColor[index]
        return `<div class="d-flex align-items-center flex-nowrap mt-2 mb-2">
                  <div class="tablet mr-3" style="background-color: ${color}"></div>
                  ${label}
                  </div>`
      })
      legends = legends.join('')
      legendMarkup.push(legends)
      legendMarkup.push('</div>')
      this.legend.nativeElement.innerHTML = legendMarkup.join('')
    },
  }

  labels: any[] = []
  dataset: any[] = []

  constructor() { }

  ngOnInit() {
    this.dashboard.forEach(data => {
      this.labels.push(data.location)
      this.dataset.push(data.total)
    })

    console.log(this.dataset)

    this.chartData = {
      "labels": this.labels,
      "datasets": [
        {
          "data": this.dataset,
          "backgroundColor": ["#46be8a", "#fb434a", "#1b55e3"],
          "borderColor": "#fff",
          "borderWidth": 2,
          "hoverBorderWidth": 0,
          "borderAlign": "inner"
        }
      ]
    }
  }

  ngAfterViewChecked() {
    this.chart.chart.generateLegend()
  }

}
