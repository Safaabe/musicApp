import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddPlaylistComponent } from '../add-playlist/add-playlist.component';

@Component({
  selector: 'app-sidebar-component',
  standalone: true,
  imports: [RouterModule, CommonModule, MatDialogModule, AddPlaylistComponent],
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.css'],
})
export class SidebarComponentComponent {
  constructor(private dialog: MatDialog) {}

  openAddPlaylistDialog(): void {
    this.dialog.open(AddPlaylistComponent, {
      width: '900px',
      data: { title: 'Add New Playlist' },
    });
  }
}
