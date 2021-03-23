import * as mongoose from 'mongoose';
import { RoleType } from 'src/core/common/constants/role-type';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, lowercase: true },
    email: { type: String, lowercase: true },
    password: { type: String },
    roles:
    {
      type: [String],
      enum: [
        RoleType.ADMIN,
        RoleType.USER,
      ],
      default: RoleType.USER,
    },

    // sofe delete
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);
