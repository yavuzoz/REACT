

function Table(event){
    event.map(eleman =>{
       return <table>   
       <tr key={eleman.Sira}>
            <td>{eleman.Sira}</td>
            <td>{eleman.Marka}</td>
            <td>{eleman.Model}</td>
            <td>{eleman.Boyut}</td>
            <td>{eleman.Fiyat}</td>
       </tr>
   </table>
    });
}


export default Table;