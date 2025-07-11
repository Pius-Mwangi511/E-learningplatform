import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CertificatesModule } from '../certificates/certificates.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, CertificatesModule, AuthModule],
  controllers: [ProgressController],
  providers: [ProgressService],
  exports: [ProgressService],
})
export class ProgressModule {}
