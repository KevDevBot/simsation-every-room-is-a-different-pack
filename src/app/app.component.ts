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
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/EP01-Get-To-Work.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Get Together',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/EP02-Get-Together.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'City Living',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/EP03-City-Living.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Cats & Dogs',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/EP04-Cats-and-Dogs.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Seasons',
      icon: 'https://simsation.ca/wp-content/uploads/2021/01/EP05-Seasons.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Get Famous',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/EP06-Get-Famous.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Island Living',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/EP07-Island-Living.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Discover University',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/EP08-Discover-University.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Eco Lifestyle',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/EP09-Eco-Lifestyle.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Snowy Escape',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/EP10-Snowy-Escape.png',
      enabled: true,
      category: 'Expansion',
    },
    {
      name: 'Holiday Celebration',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/FP01-Holiday-Celebration-Pack.png',
      enabled: true,
      category: 'Free',
    },
    {
      name: 'Outdoor Retreat',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/GP01-Outdoor-Retreat.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Spa Day',
      icon: 'https://simsation.ca/wp-content/uploads/2021/01/GP02-Spa-Day.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Dine Out',
      icon: 'https://simsation.ca/wp-content/uploads/2021/01/GP03-Dine-Out.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Vampires',
      icon: 'https://simsation.ca/wp-content/uploads/2021/01/GP04-Vampires.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Parenthood',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/GP05-Parenthood.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Jungle Adventure',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/GP06-Jungle-Adventure.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'StrangerVille',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/GP07-Strangerville.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Realm of Magic',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/GP08-Realm-of-Magic.png',
      enabled: true,
      category: 'Game',
    },
    {
      name: 'Journey to Batuu',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/GP09-Journey-to-Batuu.png',
      enabled: false,
      category: 'Game',
    },
    {
      name: 'Luxury Party',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP01-Luxury-Party.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Perfect Patio',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP02-Perfect-Patio.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Cool Kitchen',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP03-Cool-Kitchen.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Spooky',
      icon: 'https://simsation.ca/wp-content/uploads/2021/01/SP04-Spooky.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Movie Hangout',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP05-Movie-Hangout.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Romantic Garden',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP06-Romantic-Garden.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Kids Room',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP07-Kids-Room.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Backyard',
      icon: 'https://simsation.ca/wp-content/uploads/2021/01/SP08-Backyard.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Vintage Glamour',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP09-Vintage-Glamour.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Bowling Night',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP10-Bowling-Night.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Fitness',
      icon: 'https://simsation.ca/wp-content/uploads/2021/01/SP11-Fitness.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Toddler',
      icon: 'https://simsation.ca/wp-content/uploads/2021/01/SP12-Toddler.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Laundry Day',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP13-Laundry-Day.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'My First Pet',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP14-My-First-Pet.png',
      enabled: false,
      category: 'Stuff',
    },
    {
      name: 'Moschino',
      icon: 'https://simsation.ca/wp-content/uploads/2021/01/SP15-Moschino.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Tiny Living',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP16-Tiny-Living.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Nifty Knitting',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP17-Nifty-Knitting.png',
      enabled: true,
      category: 'Stuff',
    },
    {
      name: 'Paranormal',
      icon:
        'https://simsation.ca/wp-content/uploads/2021/01/SP18-Paranormal.png',
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
