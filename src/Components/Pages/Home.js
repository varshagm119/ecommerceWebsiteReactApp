import React from 'react'
import { CartState } from '../../Context/Context'
import { Button, Table } from 'react-bootstrap'
const Home = () => {
  const tickets =[
    {
      id: 1,
      date: "JUL 16",
      location: "DETROIT,MI",
      venue: "DTE ENERGY MUSIC THEATRE"
    },
    {
      id: 2,
      date: "JUL 19",
      location: "TORONTO,ON",
      venue: "BUDWEISER STAGE"
    },
    {
      id: 3,
      date: "JUL 20",
      location: "BRISTOW, VA",
      venue: "JIGGY LUBE LIVE"
    },
    {
      id: 4,
      date: "JUL 25",
      location: "PHOENIX, AZ",
      venue: "AK-CHIN PAVILION"
    },
    {
      id: 5,
      date: "JUL 28",
      location: "LAS VEGAS, NV",
      venue: "T-MOBILE ARENA"
    },
  ]
  return (
    <div>
       <div style={{padding:'40px', backgroundColor:"#777", textAlign:"center"}}>
        <h1 style={{color:'white', fontWeight:'bold', fontSize:'100px'}}>The Generics</h1>
        <Button variant='outline-info' lg>Get our Latest Album</Button>
    </div>

      <Table borderless striped size='sm'>
        <tbody>
          {tickets.map(tic => (
            <tr key={tic.id}>
              <td>{tic.date}</td>
              <td>{tic.location}</td>
              <td>{tic.venue}</td>
              <td><Button>Buy Tickets</Button></td>
            </tr>
          ) )}
        </tbody>
      </Table>
    </div>
  )
}

export default Home