import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Utilisez CommonModule ici
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-playlist',
  standalone: true,
  imports: [
    CommonModule, // Remplace BrowserModule
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css'],
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
      songs: [''],
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
