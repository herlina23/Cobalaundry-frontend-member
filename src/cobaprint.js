import React, { Component } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';

export default class Export extends Component {
  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("dudut.pdf");
    });
  }

  render() {
    return (
      <div>
        <div className="mb5">
          <button onClick={this.printDocument}>Print</button>
        </div>
        <div
          id="divToPrint"
          className="mt4"
          {...{
            backgroundColor: "#f5f5f5",
            width: "210mm",
            minHeight: "297mm",
            marginLeft: "30mm",
            marginRight: "30mm"
          }}
        >
          <div>Note: Here the dimensions of div are same as A4</div>
          <div>
            <h1>dfsdfsdf kamu djsndsndjsnnd</h1>
            <table border="2">
              <tr>
                <td>dfsdfsdf</td>
                <td>dfsdfsdf</td>
              </tr>
            </table>
          </div>
          <div>You Can add any component here</div>
        </div>
      </div>
    );
  }
}
