<template>
  <div id="eCharts" class="eCharts"></div>
</template>

<script>
export default {
  name: 'EChartsTest',
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#f90'
            }
          }
        },
        legend: {
          padding: 13,
          data: [
            {
              name: '订单总数',
              icon: 'circle'
            },
            {
              name: '2单及以上订单数',
              icon: 'circle'
            },
            {
              name: '复购率',
              icon: 'circle'
            }
          ],
          left: 'right'
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              showMinLabel: true,
              showMaxLabel: true,
              formatter (value, index) { // value--刻度值，index--刻度索引
                // console.log(index, '=======', value)
                if (index === 0 || index === 11) {
                  value = `${index + 1}月`
                } else {
                  value = ''
                }
                // console.log(index, '~~~~~~~~~~~', value)
                return value
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '订单总数',
            type: 'bar',
            barWidth: 30,
            stack: '2单及以上订单数',
            data: [],
            itemStyle: {
              normal: {
                color: '#2184c5'
              }
            }
          },
          {
            name: '2单及以上订单数',
            type: 'bar',
            barWidth: 30,
            stack: '2单及以上订单数',
            data: [],
            itemStyle: {
              normal: {
                color: '#c0ebfe'
              }
            }
          },
          {
            name: '复购率',
            type: 'line',
            data: [110, 100, 120, 95, 80, 90, 130, 30, 80, 60, 70, 98],
            itemStyle: {
              normal: {
                color: '#ff8497'
              }
            }
          }
        ]
      }
    }
  },
  mounted () {
    this.changeData('eCharts', this.option)
  }
}
</script>

<style scoped>
.eCharts {
  width: 900px;
  height: 600px;
  margin: 0 auto;
}
</style>
