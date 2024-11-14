import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-playlist',
  standalone: true,
  imports: [ BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,],
  templateUrl: './add-playlist.component.html',
  styleUrl: './add-playlist.component.css'
})
export class AddPlaylistComponent {

  playlistForm: FormGroup;
playlistName: any;
description: any;
  constructor(
    public dialogRef: MatDialogRef<AddPlaylistComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.playlistForm = this.fb.group({
      playlistName: [''],
      description: [''],
      songs: ['']
    });
  }

  onAdd(): void {
    const newPlaylist = this.playlistForm.value;
    console.log('Adding playlist:', newPlaylist);
    this.dialogRef.close(newPlaylist);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

