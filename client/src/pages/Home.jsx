import Header from "../components/header/Header"
import Settings from "../components/settings/Settings"
import Table from "../components/table/Table"
import Restart from "../components/restart/Restart"

function Home() {
  return (
    <div>
      <Header></Header>
      <Settings></Settings>
      <Table></Table>
      <Restart></Restart>
    </div>
  )
}

export default Home
