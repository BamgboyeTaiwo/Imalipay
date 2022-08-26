import React from 'react'
import HeaderCards from '../../components/Header/HeaderCards'
import Headtitle from '../../components/Header/Headtitle'
import Searchbar from '../../components/Searchbar'
import Table from '../../components/Table/Table'
import TableOverview from '../../components/Table/TableOverview'

export default function Overview() {
  return (
    <div className='px-5'>
        <Headtitle title={'Overview'}/>
        <HeaderCards/>
        <Searchbar/>
        {/* <Table/> */}
        <TableOverview/>
    </div>
  )
}
