import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLeft'
})
export class TimeLeftPipe implements PipeTransform {

  transform(value: string | Date, ...args: unknown[]): string {
    if (!value) return '';

    const now = new Date();
    const date = new Date(value);
    const seconds = Math.floor((date.getTime() - now.getTime()) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (seconds < 60) {
      return seconds === 1 ? '1 second left' : `${seconds} seconds left`;
    } else if (minutes < 60) {
      return minutes === 1 ? '1 minute left' : `${minutes} minutes left`;
    } else if (hours < 24) {
      return hours === 1 ? '1 hour left' : `${hours} hours left`;
    } else if (days < 30) {
      return days === 1 ? '1 day left' : `${days} days left`;
    } else if (months < 12) {
      return months === 1 ? '1 month left' : `${months} months left`;
    } else {
      return years === 1 ? '1 year left' : `${years} years left`;
    }
  }

}

