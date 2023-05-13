import { ComplaintType } from "./complaintType";

export class Complaint {
    idComplaint!: number;
  description!: string;
  complaintType!: ComplaintType;
 // etatComplaint!: EtatComplaint;
  scoreSentiment!: number;

}