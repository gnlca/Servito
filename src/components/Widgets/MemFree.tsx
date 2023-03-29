import { useState, useEffect } from 'react'

const MemFree = ({ memInfo }: any) => {
  // function formattedData(data) {
  //   let formatted = {}
  //   let lista = data.split('\n')
  //   let tmp
  //   for (let i = 0; i < lista.length; i++) {
  //     tmp = lista[i].split(/\s+/)
  //     formatted[tmp[0].slice(0, -1)] = [tmp[1], tmp[2] ? tmp[2].toUpperCase() : '']
  //   }
  //   // console.log(formatted);
  //   return formatted
  // }

  // function formattedMemFreeData(memInfo: string) {
  //   const MB = parseInt(memInfo['MemFree']) / 1000000
  //   return MB.toFixed(3) + ' GB'
  // }

  useEffect(() => {
    if (memInfo != undefined) {
      console.log('meminfo: ', memInfo)
      // setMemInfo(formattedData(props.meminfo))
    }
  }, [memInfo])

  return (
    <div className="MemFree widget extendedFont ">
      <span className="widgetTitle">
        {/* <i className="fas fa-memory" aria-hidden="true" /> */}
        {/* <span className="material-icons-outlined fontSmall">memory</span> */}
        <span>memory</span>
      </span>
      <br />
      <span className="widgetData">
        <span style={{ whiteSpace: 'nowrap' }}>{memInfo}</span>
      </span>
    </div>
  )
}

export default MemFree
