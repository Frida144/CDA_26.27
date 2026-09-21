import { Component } from '@angular/core';

interface Friend {
  id: number;
  name: string;
  age: number;
  status: 'Online' | 'Offline';
  bio: string;
  imgUrl: string;
  githubUrl: string;
}

@Component({
  imports: [],
  selector: 'app-attributes-binding-exercice',
  template:`
  <div id="one-friend-card" class="container mx-auto p-4">
  <!-- 🟩 Grid responsive -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <!-- 🟦 Carte Ami -->
    <div class="card bg-base-200 shadow-xl">
      <figure>
        <!-- Attribute binding de SRC de l'img -->
        <img [src]="oneFriend.imgUrl" [alt]="oneFriend.name" class="object-cover w-full h-48 rounded-t-xl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-primary">
          {{ oneFriend.name }}
        </h2>
        <p class="text-sm">
          <span class="font-bold">GitHub :</span>
          <!-- Attribute binding du HREF du lien -->
          <a [href]="oneFriend.githubUrl" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
            {{ oneFriend.githubUrl }}
          </a>

        <p class="text-sm">
          <span class="font-bold">Status :</span>
          {{ getOneFriendStatus() }}
        </p>
        <p class="text-sm">
          <span class="font-bold">Âge :</span>
          {{ oneFriend.age }}
        </p>
        <p class="text-sm">
          <span class="font-bold">Bio :</span>
          {{ oneFriend.bio }}
        </p>
        <p class="text-sm">
          <span class="font-bold">Réputation :</span>
          {{ oneFriend.status==='Online' ? 'Ringard' : 'Cool' }}
        </p>
      </div>
    </div>
  </div>
</div>

  `
})
export class AttributesBindingExercice {
    oneFriend: Friend = {
    id: 99,
    name: 'Steven Cigale',
    age: 25,
    status: 'Offline',
    bio: 'Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.',
    imgUrl: 'https://picsum.photos/seed/picsum/150/150',
    githubUrl:'https://github.com/stevencigale',
  };

  getOneFriendStatus(): Friend['status'] {
    return this.oneFriend.status;
  }
}
