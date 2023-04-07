export default class Time {
  constructor(date) {
    this.date = date;
  }

  get pastDate() {
    return new Date(this.date);
  }

  get todayDate() {
    return new Date();
  }

  get year() {
    return Math.floor((this.todayDate - this.pastDate) / (1000 * 60 * 60 * 24 * 365));
  }

  get month() {
    return Math.floor((this.todayDate - this.pastDate) / (1000 * 60 * 60 * 24 * 30.417));
  }

  get day() {
    return Math.floor((this.todayDate - this.pastDate) / (1000 * 60 * 60 * 24));
  }

  get total() {
    const year = this.year;
    const month = this.month % 12;
    const day = Math.floor(this.day % 30.417);
    return {
      year,
      month,
      day
    }
  }
}