import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import jsPDFInvoiceTemplate from 'jspdf-invoice-template';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nomeCliente: string = 'andrezao';
  urlImg = "../../../../assets/logo-construbico.png";

  props: any = {
    outputType: "save",
    returnJsPDFDocObject: true,
    fileName: "Invoice 2022",
    orientationLandscape: false,
    compress: true,
    logo: {
      src: this.urlImg,
      width: 40.33, //aspect ratio = width/height
      height: 33.33,
      margin: {
        top: -4, //negative or positive num, from the current position
        left: 0 //negative or positive num, from the current position
      }
    },
    stamp: {
      inAllPages: true,
      src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
      width: 20, //aspect ratio = width/height
      height: 20,
      margin: {
        top: 0, //negative or positive num, from the current position
        left: 0 //negative or positive num, from the current position
      }
    },
    business: {
      name: "Business Name",
      address: "Albania, Tirane ish-Dogana, Durres 2001",
      phone: "(+355) 069 11 11 111",
      email: "email@example.com",
      email_1: this.nomeCliente,
      website: "www.example.al",
    },
    contact: {
      label: "Invoice issued for:",
      name: "Client Name",
      address: "Albania, Tirane, Astir",
      phone: "(+355) 069 22 22 222",
      email: "client@website.al",
      otherInfo: "www.website.al",
    },
    invoice: {
      label: "Invoice #: ",
      num: 19,
      invDate: "Payment Date: 01/01/2021 18:12",
      invGenDate: "Invoice Date: 02/02/2021 10:17",
      headerBorder: true,
      tableBodyBorder: true,
      header: [
        {
          title: "#",
          style: {
            width: 10
          }
        },
        {
          title: "Title",
          style: {
            width: 30
          }
        },
        {
          title: "Description",
          style: {
            width: 80
          }
        },
        { title: "Price" },
        { title: "Quantity" },
        { title: "Unit" },
        { title: "Total" }
      ],
      table: Array.from(Array(15), (item, index) => ([
        index + 1,
        "There are many variations ",
        "Lorem Ipsum is simply dummy text dummy text ",
        200.5,
        4.5,
        "m2",
        400.5
      ])),
      additionalRows: [{
        col1: 'Total:',
        col2: '145,250.50',
        col3: 'ALL',
        style: {
          fontSize: 14 //optional, default 12
        }
      },
      {
        col1: 'VAT:',
        col2: '20',
        col3: '%',
        style: {
          fontSize: 10 //optional, default 12
        }
      },
      {
        col1: 'SubTotal:',
        col2: '116,199.90',
        col3: 'ALL',
        style: {
          fontSize: 10 //optional, default 12
        }
      }],

      invDescLabel: "Invoice Note",
      invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    footer: {
      text: "The invoice is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
  }



  @ViewChild('exports') exports!: ElementRef;

  // generatePDF() {
  //   const doc = new jsPDF();

  //   const content = this.exports.nativeElement;

  //   html2canvas(content).then(canvas => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdfWidth = doc.internal.pageSize.getWidth();
  //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  //     doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //     doc.save('generated.pdf');
  //   });
  // }

  generatePDF() {
    const pdfObject = jsPDFInvoiceTemplate(this.props);
  }

}
