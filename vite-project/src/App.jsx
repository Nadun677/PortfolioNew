
function App() {

  return (
    <>
    <browserRouter>
     <routes>
      <route />
       <route index element={<Home />}/>
      <route path="*" element="{<Notfound />}"/>
     </routes>
    </browserRouter>  
    </>
  )
}

export default App
