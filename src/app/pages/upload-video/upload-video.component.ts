import {catchError, map} from "rxjs/operators";
import {HttpClient, HttpEventType} from "@angular/common/http";
import {Component, ElementRef, EventEmitter, Output, ViewChild} from "@angular/core";
import {throwError} from "rxjs";

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedFile?: File;
  uploadProgress?: number;
  isDragOver = false;
  showDetailsForm = false;
  showButton = false;
  uploadResponse?: string;
  isUploading = false;
  videoURL?: string; // Store the video URL
  @Output() videoUploaded: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) {}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true; // Set flag to true to change styling
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false; // Reset flag when dragging leaves the area
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false; // Reset flag when file is dropped

    if (event.dataTransfer && event.dataTransfer.files.length) {
      this.selectedFile = event.dataTransfer.files[0];
    }
  }
  showUploadButton() {
    if (this.selectedFile) {
      this.showButton = true; // Set the flag to show the button
      console.log('Selected file:', this.selectedFile.name);
    } else {
      this.showButton = false; // Hide the button if no file is selected
    }
  }
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFile = input.files[0]; // Get the first file
      this.showUploadButton();
    }
  }

  triggerFileUpload() {
    this.fileInput.nativeElement.click();
  }

  uploadFiles(files: File[]): void {
    if (!files.length) return;

    this.isUploading = true; // Indicate upload has started
    const formData = new FormData();
    formData.append('video', files[0]);

    this.http.post<any>('http://localhost:8083/uploadVideoS3', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // Calculate and update upload progress
          this.uploadProgress = event.total ? Math.round(100 * event.loaded / event.total) : this.uploadProgress;
        } else if (event.type === HttpEventType.Response) {
          // Handle response received
          this.videoUploaded.emit(event.body.url); // Emit the URL to the parent component
          this.uploadProgress = undefined; // Reset progress
          this.isUploading = false; // Indicate that uploading has finished
        }
        return event;
      }),
      catchError(error => {
        console.error('Upload error:', error);
        this.uploadProgress = undefined; // Reset progress on error
        this.isUploading = false; // Reset uploading state on error
        return throwError(() => new Error('Failed to upload video.'));
      })
    ).subscribe();
  }

}
