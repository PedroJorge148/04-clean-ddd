import { randomUUID } from "node:crypto"
import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {

}