import { AfterViewInit, VERSION, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders, HttpEventType, HttpResponse } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators, ReactiveFormConfig, email } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  version = 'Angular: v' + VERSION.full;
  employee: any = [];
  employeeDetails: any;
  image: any;
  // We use this trigger because fetching the list of employee can be quite long,
  // thus we ensure the data is fetched before rendering
  updateData = false;
  dtTrigger: Subject<any> = new Subject();
  dataUrl = 'http://localhost:3000/api'
  closeResult = '';
  editID = "";
  selectedFile1: any;
  cardImageBase64: any;
  isImageSaved: any;
  deleteId: any

  constructor(private http: HttpClient, private modalService: NgbModal, public fb: FormBuilder,) {
    this.employeeDetails = this.fb.group({
      img: [''],
      firstName: [''],
      lastName: [''],
      dob: [''],
      mobile: ['', RxwebValidators.pattern({ expression: { 'onlyDigit': /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/ } })],
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      city: ['']
    })
  }

  ngOnInit(): void {
    ReactiveFormConfig.set({ "validationMessage": { "onlyDigit": "Enter Valid mobile number" } });
    ReactiveFormConfig.set({
      "validationMessage": {
        "email": "Invalid email format",
      }
    });
    this.employeeDetails.valueChanges.subscribe((x: any) => {
      this.image = x;
    })
    this.getAllData();
  };

  getAllData() {
    this.http.get(this.dataUrl + '/allList')
      .subscribe((response: any) => {
        this.employee = response;
        console.log(response);
        // Calling the DT trigger to manually render the table
        this.dtTrigger
      });
  };

  open(content: any) {
    this.updateData = false;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  };


  editData(data: any, content: any) {
    this.editID = data._id;
    this.updateData = true;
    this.employeeDetails.patchValue({ ...data });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  };

  submitData() {
    this.submitted = true;
    if (this.updateData) {
      this.employeeDetails.value.img = this.cardImageBase64;
      this.http.put(this.dataUrl + '/edit/' + this.editID, this.employeeDetails.value).subscribe((response: any) => {
        this.getAllData();
        this.updateData = false;
      })
    }
    else {
      this.employeeDetails.value.img = this.cardImageBase64;
      this.http.post(this.dataUrl + '/create/', this.employeeDetails.value).subscribe((response: any) => {
        this.employeeDetails = this.fb.group({
          img: [''],
          firstName: [''],
          lastName: [''],
          dob: [''],
          mobile: [''],
          email: [''],
          city: ['']
        })
        this.getAllData();
      })
    }
  };

  // Delete employee
  deleteData(id: any) {
    this.http.delete(this.dataUrl + '/delete/' + id)
      .subscribe((response: any) => {
        this.getAllData();
      });
  };

  //File upload
  fileChange(fileInput: any) {
    const image = fileInput.target.files[0];
    this.selectedFile1 = image;
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs: any) => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
          if (this.selectedFile1) {
            const files = new FormData();
            files.append('files', this.selectedFile1)
          }
        };
      };
      reader.readAsDataURL(fileInput.target.files[0])
    }
  };
}
