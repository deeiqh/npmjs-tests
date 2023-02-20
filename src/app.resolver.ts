import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { SendOperationOtpGuard } from 'otp-guards';

@Resolver()
export class AppResolver {
  @Query(() => String)
  @UseGuards(SendOperationOtpGuard)
  getHello(): string {
    return '11';
  }
}
