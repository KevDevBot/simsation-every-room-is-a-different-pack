import { Component } from '@angular/core';

type PackCategory = 'Expansion' | 'Free' | 'Game' | 'Stuff' | 'Other';

class PackData {
  constructor(
    public name: string = '',
    public icon: string = '',
    public enabled: boolean = false,
    public category: PackCategory = 'Other'
  ) {}
}

class RoomData {
  constructor(
    public name: string = '',
    public locked: boolean = false,
    public pack: PackData
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Simsation - Every Room Is A Different Pack';

  displayedColumns: string[] = ['RoomLock', 'Room', 'Icon', 'Pack'];

  rooms: RoomData[] = [
    { name: 'Exterior', locked: false, pack: new PackData() },
    { name: 'Kitchen', locked: false, pack: new PackData() },
    { name: 'Living Room', locked: false, pack: new PackData() },
    { name: 'Dining Room', locked: false, pack: new PackData() },
    { name: 'Master Bedroom', locked: false, pack: new PackData() },
    { name: 'En Suite', locked: false, pack: new PackData() },
    { name: 'Kids Bedroom 1', locked: false, pack: new PackData() },
    { name: 'Kids Bedroom 2', locked: false, pack: new PackData() },
    { name: 'Guest/Office', locked: false, pack: new PackData() },
    { name: 'Main Bathroom', locked: false, pack: new PackData() },
    { name: 'Laundry/Bathroom', locked: false, pack: new PackData() },
    { name: 'Hallway', locked: false, pack: new PackData() },
    { name: 'Yard/Landscaping', locked: false, pack: new PackData() },
  ];

  packs: PackData[] = [
    {
      name: 'Get to Work',
      icon: 'EP01 Get To Work.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Get Together',
      icon: 'EP02 Get Together.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'City Living',
      icon: 'EP03 City Living.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Cats & Dogs',
      icon: 'EP04 Cats and Dogs.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Seasons',
      icon: 'EP05 Seasons.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Get Famous',
      icon: 'EP06 Get Famous.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Island Living',
      icon: 'EP07 Island Living.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Discover University',
      icon: 'EP08 Discover University.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Eco Lifestyle',
      icon: 'EP09 Eco Lifestyle.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Snowy Escape',
      icon: 'EP10 Snowy Escape.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Holiday Celebration',
      icon: 'FP01 Holiday Celebration Pack.png',
      enabled: true,
      category: 'Free',
    },
    {
      name: 'Outdoor Retreat',
      icon: 'GP01 Outdoor Retreat.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Spa Day',
      icon: 'GP02 Spa Day.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Dine Out',
      icon: 'GP03 Dine Out.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Vampires',
      icon: 'GP04 Vampires.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Parenthood',
      icon: 'GP05 Parenthood.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Jungle Adventure',
      icon: 'GP06 Jungle Adventure.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'StrangerVille',
      icon: 'GP07 Strangerville.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Realm of Magic',
      icon: 'GP08 Realm of Magic.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Journey to Batuu',
      icon: 'GP09 Journey to Batuu.png',
      enabled: false,
      category: 'Game',
    },
    {
      name: 'Luxury Party',
      icon: 'SP01 Luxury Party Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Perfect Patio',
      icon: 'SP02 Perfect Patio Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Cool Kitchen',
      icon: 'SP03 Cool Kitchen Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Spooky',
      icon: 'SP04 Spooky Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Movie Hangout',
      icon: 'SP05 Movie Hangout Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Romantic Garden',
      icon: 'SP06 Romantic Garden Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Kids Room',
      icon: 'SP07 Kids Room Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Backyard',
      icon: 'SP08 Backyard Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Vintage Glamour',
      icon: 'SP09 Vintage Glamour Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Bowling Night',
      icon: 'SP10 Bowling Night Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Fitness',
      icon: 'SP11 Fitness Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Toddler',
      icon: 'SP12 Toddler Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Laundry Day',
      icon: 'SP13 Laundry Day Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'My First Pet',
      icon: 'SP14 My First Pet Stuff.png',
      enabled: false,
      category: 'Stuff',
    },
    {
      name: 'Moschino',
      icon: 'SP15 Moschino Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Tiny Living',
      icon: 'SP16 Tiny Living Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Nifty Knitting',
      icon: 'SP17 Nifty Knitting Stuff.png',
      enabled: true,
      category: 'Stuff',
    },
  ];

  useablePacks: PackData[] = [];

  constructor() {
    for (const pack of this.packs) {
      if (pack.enabled) {
        this.useablePacks.push(pack);
      }
    }
    this.randomize();
  }

  randomize() {
    if (this.useablePacks.length > 0) {
      const newRooms = [...this.rooms];
      for (let i = 0; i < newRooms.length; i++) {
        if (!newRooms[i].locked) {
          newRooms[i].pack = this.useablePacks[
            this.getRandomInt(0, this.useablePacks.length - 1)
          ];
        }
      }
      this.rooms = newRooms;
    } else {
      alert(
        'No packs are useable. Please enable them from the Pack Settings menu.'
      );
    }
  }

  toggleRoomLock(room: RoomData) {
    room.locked = !room.locked;
  }

  togglePack(item: PackData) {
    item.enabled = !item.enabled;
    item.enabled ? this.addUseableItem(item) : this.removeUseableItem(item);
  }

  addUseableItem(pack: PackData) {
    const idx = this.useablePacks.findIndex((p) => p.name == pack.name);
    if (idx < 0) {
      this.useablePacks.push(pack);
    }
  }

  removeUseableItem(pack: PackData) {
    const idx = this.useablePacks.findIndex((p) => p.name == pack.name);
    if (idx >= 0) {
      this.useablePacks.splice(idx, 1);
    }
  }

  private getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}