import { Component, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-playlist',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css'],
})
export class AddPlaylistComponent {
  playlistName: string = ''; // Nom de la playlist
  description: string = ''; // Description
  imagePreview: string | ArrayBuffer | null = null; // Aperçu de l'image
  selectedFile: File | null = null; // Fichier sélectionné

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>; // Référence au champ d'entrée de fichier
Annuler: any;

  constructor(
    public dialogRef: MatDialogRef<AddPlaylistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // ouvrir la fenetre pour choisir une photo
  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  //selection une photo
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Lire le fichier sélectionné 
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  // Valider et fermer le popup page
  onAdd(): void {
    const newPlaylist = {
      name: this.playlistName,
      description: this.description,
      image: this.selectedFile,
    };
    console.log('Nouvelle playlist créée :', newPlaylist);
    this.dialogRef.close(newPlaylist);
  }

  // Annuler l'opération
  onCancel(): void {
    this.dialogRef.close();
  }
}
